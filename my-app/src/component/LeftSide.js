import React, { useContext } from "react";

import { titleContext } from "../context/TitleContextProvider";
import ListOfCourse from "./ListOfCourse";

export default function LeftSide() {
  const { showNavigateBtn, list, setList } = useContext(titleContext);
  
  return (
    <>
      {showNavigateBtn === "WebDesign" && (
        <ListOfCourse
          header="WebDesign"
          Data={list.filter((i) => i.category === "WebDesign")}
        />
      )}
      {showNavigateBtn === "FrontEnd" && (
        <ListOfCourse
          header="FrontEnd"
          Data={list.filter((i) => i.category === "FrontEnd")}
        />
      )}
      {showNavigateBtn === "BackEnd" && (
        <ListOfCourse
          header="BackEnd"
          Data={list.filter((i) => i.category === "BackEnd")}
        />
      )}
      {showNavigateBtn === "all" && (
        <>
          <ListOfCourse
            header="WebDesign"
            Data={list.filter((i) => i.category === "WebDesign")}
          />
          <ListOfCourse
            header="FrontEnd"
            Data={list.filter((i) => i.category === "FrontEnd")}
          />
          <ListOfCourse
            header="BackEnd"
            Data={list.filter((i) => i.category === "BackEnd")}
          />
        </>
      )}
    </>
  );
}
