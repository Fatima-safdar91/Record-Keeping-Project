import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import Fields from "./Components/Fields";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({form});

  };

const removeData = (index) => {
  let arr = data;
  arr.splice(index,1);
  setData([...arr]);
}

  return (
    <div className="App">
      {/* FORM */}
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form , name : event.target.value})}
            id="outlined-basic"
            label="UserName"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm({...form , email : event.target.value})}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/*DATA */}
      <div className="data">
        <div className="dataValue">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div  key = {index} className="dataValue">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack>
              <Button onClick={() => removeData(index)} variant="outlined" color="error">
                <DeleteIcon />
              </Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}

export default App;
