import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { textAlign } from '@mui/system';
import { titleContext } from "../context/TitleContextProvider";
export default function Footer() {
  const [value, setValue] = React.useState('all');
const {showNavigateBtn,setShowNavigateBtn}=React.useContext(titleContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleShow(item) {
    setShowNavigateBtn(item)
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
      centered
        value={value}
        onChange={handleChange}
        style={{margin:"auto"}}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="all" label="all" onClick={() => handleShow('all')}/>
        <Tab value="WebDesign" label="WebDesign" onClick={() => handleShow("WebDesign")}/>
        <Tab value="FrontEnd" label="FrontEnd"  onClick={() => handleShow("FrontEnd")}/>
        <Tab value="BackEnd" label="BackEnd" onClick={() => handleShow("BackEnd")}/>
      </Tabs>
    </Box>
  );
}
