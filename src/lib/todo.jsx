import { Box, IconButton, TextField } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useState } from "react";
export default function Todo({ todo, onDelete, onNameChange }) {
  const [name, setName] = useState(todo.name);

  return (
    <Box pt="10px">
      <Box
        sx={{
          backgroundColor: "gray",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <TextField
          value={name}
          sx={{
            "input:not(:focus) ~ fieldset": {
              border: "none",
            },

            input: {
              "&:not(:focus)": { cursor: "pointer" },
              "&:focus": { backgroundColor: "#707070" },
              caretColor: "white",
            },
          }}
          onKeyUp={({ key, target }) => {
            if (key == "Enter" || key == "Escape") {
              target.blur();
            }
          }}
          onBlur={() => {
            onNameChange(target.value);
            setName(target.value);
          }}
        />
        <IconButton sx={{ float: "right" }} onClick={() => onDelete()}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
}
