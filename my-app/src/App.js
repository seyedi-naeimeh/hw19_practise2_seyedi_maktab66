import Navbar from "./component/Navbar";
import Grid from "./component/Grid";
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import ListOFCourse from "./component/ListOfCourse";
import { Desciption } from "./component/Desciption";
import { TitleContextProvider } from "./context/TitleContextProvider";
import { Modal } from "@mui/material";
import ModalAdd from "./component/ModalAdd";

function App() {
  return (
    <TitleContextProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Grid />} />
          <Route path="/Grid" element={<Grid />} />
          <Route path="/form" element={<Form />} />
          <Route path="/modal" element={<ModalAdd />} />
        </Route>
        <Route path="/Desciption" element={<Desciption />} />
      </Routes>
    </TitleContextProvider>
  );
}

export default App;
