import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ListOfCourse from "./ListOfCourse";
import Footer from "./Footer";
import Form from "./Form";
import { Outlet, Route, Routes } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item >
          <LeftSide />
          </Item>
        </Grid>
        <Grid item xs={8}>
            <RightSide />
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
      <Outlet />
    </Box>
  );
}
