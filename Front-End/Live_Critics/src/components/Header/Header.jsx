import React from "react";
import logo from "../../assets/placeholder.png";
import { TextField } from "@mui/material";


function Header(){
    return (
        <header>
            <img src={logo} alt="Logo" />
            <input type="text" />
            <div>
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>
            <div>
             
            </div>
        </header>
    )
}

export default Header;