import React from "react";
import { Image } from "@chakra-ui/image";
import picture from '../../assets/placeholder.png'
import { Card,CardHeader, CardBody,CardFooter } from "@chakra-ui/card";
import { Box, Stack, Heading,Text } from "@chakra-ui/layout";
import Star from "../../assets/StarRating";



export default function Home() {
    return(
        <Box>
            <Card maxW='150px'>
                <CardBody display='flex' flexDirection='column'><Image src={picture} boxSize="100px"/>
                <Stack>
                    <Heading size='sm'>Music</Heading>
                    <Text>Artist</Text>
                </Stack>
                </CardBody>
                <CardFooter>
                    <Star />
                </CardFooter>
            </Card>
            <Card maxW='150px'>
                <CardBody display='flex' flexDirection='column'><Image src={picture} boxSize="100px"/>
                <Stack>
                    <Heading size='sm'>Music</Heading>
                    <Text>Artist</Text>
                </Stack>
                </CardBody>
                <CardFooter>
                    <Star />
                </CardFooter>
            </Card>
            <Card maxW='150px'>
                <CardBody display='flex' flexDirection='column'><Image src={picture} boxSize="100px"/>
                <Stack>
                    <Heading size='sm'>Music</Heading>
                    <Text>Artist</Text>
                </Stack>
                </CardBody>
                <CardFooter>
                    <Star />
                </CardFooter>
            </Card>
        </Box>
    )
}