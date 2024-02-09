import React from "react";

import { Link } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Navbar = () => {
    return(
       <Tabs>
        <TabList>
        <Tab><Link to='/Podcast'>Top Podcast</Link></Tab>
        <Tab><Link to='/Music'>Top Music</Link></Tab>
        <Tab><Link to='/Album'>Top Album</Link></Tab>
        </TabList>
       </Tabs>
    )
}

export default Navbar;