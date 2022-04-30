import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { titleContext } from "../context/TitleContextProvider";
import axios from "axios";

const courses = ["WebDesign", "FrontEnd", "BackEnd"];

export default function BasicTextFields() {

  const {setSelectedItem,selectedItem,list,setList}=React.useContext(titleContext)
  const handleChange = (event) => {
    setSelectedItem({...selectedItem,[event.target.name]: event.target.value });
   };

  console.log(selectedItem)
  function editSkills(){
     
     axios.patch(`http://localhost:4000/skills/${selectedItem.id}`,{title:selectedItem.title,category:selectedItem.category,Desciption:selectedItem.Desciption} )
    .then((response) => {
      setSelectedItem(response.data)
    })
    .catch((error) => {})

  
   }

   
  
  return (
    <div >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0.7, width: "40ch"},
        }}
        noValidate
        autoComplete="off"
        className="textField"
      >
        <TextField
      InputProps={{ style: { fontSize: 9 } }}
      InputLabelProps={{ style: { fontSize: 10} }}
          name='title'
          label="Title"
          value={selectedItem.title}
          onChange={e=>handleChange(e)}
          variant="standard"
          // value={value.title}
          // onChange={e=>handleChange(e)}
        />
        <TextField
         InputProps={{ style: { fontSize: 9 } }}
         InputLabelProps={{ style: { fontSize: 10 } }}
         name='category'
          select
          label="skills"
          value={selectedItem.category}
          onChange={e=>handleChange(e)}
          // onChange={e=>handleChange(e)}

          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {courses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>

        <TextField
         InputProps={{ style: { fontSize: 9 } }}
         InputLabelProps={{ style: { fontSize: 10 } }}
        name='Desciption'
          label="Description
          "
          multiline
          rows={2}
          variant="standard"
          value={selectedItem.Desciption}
          onChange={e=>handleChange(e)}
        />
        <Button variant="text" type="sumbit" size="small" sx={{width:"5ch !important" }} onClick={()=>editSkills()}>Edit</Button>
      </Box>
    </div>
  );
}
