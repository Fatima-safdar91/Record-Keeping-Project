import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({ name, email, index }) => {
    
  return (
    <div className="dataValue">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
       <Button variant="outlined" color="error">
       <DeleteIcon />
      </Button>
      </Stack>
    </div>
  );
};

export default Fields;
