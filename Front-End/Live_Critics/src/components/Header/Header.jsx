import React from "react";
import logo from "../../assets/placeholder.png";

import Navbar from "../Navbar/Navbar";
import { Box, Flex } from "@chakra-ui/layout";
import { Image, Input, Center, Button } from '@chakra-ui/react'


function Header(){
    return (
        <Flex bg='lightblue' justifyContent='space-between'>
            <Box>
                <Image 
                src={logo}
                boxSize='80px'
                />
            </Box>
            <Center>
                <Input placeholder="Search" size='lg' width='300px' />
                <Button height='48px' >Search</Button>
            </Center>
            <Center>
                <Navbar />
            </Center>
        </Flex>

    )
}

export default Header;