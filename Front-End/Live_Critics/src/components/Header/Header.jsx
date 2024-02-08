import React from "react";
import logo from "../../assets/placeholder.png";

import Navbar from "../Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/layout";
import { Image, Input, Center, Button } from '@chakra-ui/react'


function Header(){
    return (
        <Flex bg='lightblue' justifyContent='space-between' borderRadius='5px'>
            <Box>{/*Logo of the website */}
                <Image 
                src={logo}
                boxSize='80px'
                />
            </Box>
            {/* Search bar*/}
            <Center>
                <Input placeholder="Search" size='lg' width='300px' />
                <Button height='48px' >Search</Button>
            </Center>
            {/* Tabs*/}
            <Center>
                <Navbar />
            </Center>
        </Flex>

    )
}

export default Header;