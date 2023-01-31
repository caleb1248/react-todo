import { Box, IconButton, TextField } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useState } from "react";
export default function Todo({ todo }) {
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
          onChange={({ target }) => {
            todo.onNameChange(target.value);
            setName(target.value);
          }}
          onKeyUp={({ key, target }) => {
            if (key == "Enter" || key == "Escape") target.blur();
          }}
        />
        <IconButton sx={{ float: "right" }}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
}
