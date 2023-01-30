import { Box, IconButton, TextField } from "@mui/material";
import Delete from '@mui/icons-material/Delete';
import { useState } from 'react';
export default function Todo({todo}) {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
				padding: "1rem",
				borderRadius: "10px"
      }}
      mt={"10px"}
    >
			<TextField value={todo.name} sx={{
			backgroundColor: "white",
			"&:hover": {
				backgroundColor: "black"
			}
			}}></TextField>
			<IconButton sx={{float: "right"}}><Delete /></IconButton>
    </Box>
  );
}
