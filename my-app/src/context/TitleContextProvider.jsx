import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const titleContext = createContext({});

export const TitleContextProvider = (props) => {

  const [list, setList] = useState([]);
  const [showNavigateBtn, setShowNavigateBtn] = useState("all");
  const [flagEdit, setFlagEdit] = useState(false);
  const [flagDescription, setFlagDescribtion] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const { children } = props;

  useEffect(() => {
    axios.get("http://localhost:4000/skills").then((response) => {
    setList(response.data)
      
    });
  }, []);
  

  return (
    <>
     
      <titleContext.Provider
        value={{
          list,
          showNavigateBtn,
          setShowNavigateBtn,
          flagDescription,
          setFlagDescribtion,
          setSelectedItem,
          selectedItem,
          flagEdit,
          setFlagEdit
        }}
      >
        {children}
      </titleContext.Provider>
    </>
  );
};
