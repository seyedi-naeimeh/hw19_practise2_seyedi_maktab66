import React, { useContext } from 'react';
import { titleContext } from "../context/TitleContextProvider";
import Form from "./Form"

function RightSide() {
    const {showNavigateBtn,flagDescription,selectedItem,flagEdit}=useContext(titleContext)
  return (
    <div>
        {flagEdit?(<Form />):(
               <>
                 {flagDescription ? (
                    <>
                        <span> {selectedItem.title} </span>
                        <p>{selectedItem.Desciption}</p>
                    </>
                  ) : (
                    <>
                        <span>Welcome!</span>
                        <p> Please select an exercise from the list on the left side.</p>
                    </>
                  )}
               </>
        )}
        
    </div>
  )
}

export default RightSide