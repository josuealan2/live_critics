import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'
import { Box, Grid } from "@chakra-ui/layout";
import Home from "./components/Tabs/Home";

function App() {
  return (

   <>
   <Header />
   
   <Home />
    
    <Footer />
    </>
  )
}

export default App
