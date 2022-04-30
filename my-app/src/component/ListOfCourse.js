import React, { useContext, useEffect, useState } from "react";
import {
  List,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  textFieldClasses,
  selectClasses,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "./Form";
import { Link, Outlet } from "react-router-dom";
import { titleContext } from "../context/TitleContextProvider";
import {LeftSide} from "./LeftSide"
const ListOfCourse = ({Data, header}) => {
  const [checked, setChecked] = useState([0]);
  const {showNavigateBtn,flagDescription,setFlagDescribtion,setSelectedItem,setFlagEdit,flagEdit}=React.useContext(titleContext)
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleOnItemSelected=(i)=>{
   setSelectedItem(i);
    setFlagDescribtion(true);
  }
const onEditItem=()=>{
  setFlagEdit(true)
}
  
  return (
    <>
     <h1>{header}</h1>
      <List sx={{ width: "100%",height:"50px", maxWidth: 360, bgcolor: "background.paper"}}>
        {Data.map((value) => {
          return (
            <ListItem
            sx={{margin:"1px" }}
              key={value.id}
              onClick={()=>handleOnItemSelected(value)}
              secondaryAction={
                <>
                  <Link to={"/Grid"}>
                    <IconButton edge="end" aria-label="edit" onClick={onEditItem} >
                      <BorderColorIcon sx={{fontSize:"15px"}}/>
                    </IconButton>
                  </Link>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon sx={{fontSize:"15px"}}/>
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemText primary={value.title}  sx={{fontSize:"5px"}}/>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default ListOfCourse;
