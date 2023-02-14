import { auth, db } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDoc, addDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { SHA256 } from "crypto-js";

async function signIn() {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  return await handleUser(user);
}

const userMap = doc(db, "todos", "usermap");

/**
 *
 * @param {import("firebase/auth").User} user
 */
async function handleUser({uid}) {
  let map = (await getDoc(userMap)).data();
  const hashedUid = SHA256(uid).toString();

  if (typeof map[hashedUid] == "undefined") {
    const newUser = await addDoc({ todos: [], uid });
    await updateDoc({ [hashedUid]: newUser.id });
  }

  const userDoc = doc(db, "users", map[hashedUid]);

  return {
    todos: getDoc(userDoc),
    update: async (newTodos) => {
      await updateDoc(userDoc, { todos: newTodos });
    },
  };
}

export { signIn };
