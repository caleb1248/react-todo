import { Box } from "@mui/material";

export default function Todo({todo}) {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
      }}
      mt={"10px"}
    >
      {todo.name}
    </Box>
  );
}
