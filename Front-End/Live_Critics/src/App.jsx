import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'
import { Box, Grid } from "@chakra-ui/layout";
import Home from "./components/Home/Home";
import List from "./components/Home/MusicList";

function App() {
  return (

   <>
   <Header />
   
   <Home />
    <List />
    <Footer />
    </>
  )
}

export default App
