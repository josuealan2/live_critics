import React from "react";
import { Image } from "@chakra-ui/image";
import picture from '../../assets/placeholder.png'
import { Card,CardHeader, CardBody,CardFooter } from "@chakra-ui/card";
import {Stack, Heading,Text, Flex } from "@chakra-ui/layout";
import Star from "../../assets/StarRating";





export default function Home() {
    return(//Card element of the top podcast, music, album
        <Flex justifyContent='space-between' margin='0 90px' padding='40px' border='5px groove lightblue' borderRadius='20px' background='#cef1ff'>
            {/* Card for top podcast*/}
            <Card maxW='150px' boxShadow='dark-lg'>
                <CardHeader><Image src={picture} boxSize="100px" borderRadius='5px'/></CardHeader>
                <CardBody>
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
            {/* Card for top music*/}
            <Card maxW='150px' boxShadow='dark-lg'>
            <CardHeader><Image src={picture} boxSize="100px" borderRadius='5px'/></CardHeader>
                <CardBody>
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
            {/*Card for Top Album */}
            <Card maxW='150px' boxShadow='dark-lg'>
            <CardHeader><Image src={picture} boxSize="100px" borderRadius='5px'/></CardHeader>
                <CardBody>
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