import React from 'react';
import { Image } from "@chakra-ui/image";
import picture from '../../assets/placeholder.png'
import { Card,CardHeader, CardBody,CardFooter } from "@chakra-ui/card";
import {Stack, Heading,Text, Flex } from "@chakra-ui/layout";
import Star from '../../assets/StarRating';


function List() {
    return(
<Flex justifyContent='space-between' margin='60px 140px' padding='40px' flexWrap='wrap'>
<Card maxW='150px' boxShadow='dark-lg' margin='20px'>
    {/* */}
    <CardBody display='flex' flexDirection='column'><Image src={picture} boxSize="100px"/>
    <Stack>
        <Heading size='sm'>Music</Heading>
        <Text>Artist</Text>
        <Text>Genre:</Text>
    </Stack>
    </CardBody>
    <CardFooter>
        <Star />
    </CardFooter>
</Card>

</Flex>
    )
}

export default List