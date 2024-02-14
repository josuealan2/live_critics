import React from "react";
import logo from "../../assets/image.png";import { Link } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, Input, Image, Button, Center } from '@chakra-ui/react'


const Navbar = (props) => {
    return(
    <Flex bg='lightblue' justifyContent='space-between' borderRadius='5px'>
             <Box>{/*Logo of the website */}
                <Image 
                src={logo}
                boxSize='80px'
                borderRadius='5px'
                width='120px'
                />
            </Box>
            {/* Search bar*/}
            <Center>
                <Input placeholder="Search" size='lg' width='300px' type="Text" onChange={props.handleInput}/>
                <Button height='48px' onClick={props.handleSubmit}>Search</Button>
            </Center>
       <Tabs>
        <TabList>
        <Tab><Link to='/Podcast'>Top Podcast</Link></Tab>
        <Tab><Link to='/Music'>Top Music</Link></Tab>
        <Tab><Link to='/Album'>Top Album</Link></Tab>
        </TabList>
       </Tabs>
    </Flex>
    )
}

export default Navbar;