import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Card,CardHeader, CardBody,CardFooter } from "@chakra-ui/card";
import {Stack, Heading,Text, Flex } from "@chakra-ui/layout";
import Star from './assets/StarRating';

function App() {
  const CLIENT_ID = 'a09d234ff7294ee5aa00c70848334e56'
  const CLIENT_SECRET = 'afda36118a9e49ad8c6540597b54684e'
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbum] = useState([]);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    console.log(searchInput)
  }
  useEffect(() => {
    var auth = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    
      fetch('https://accounts.spotify.com/api/token', auth)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
      
  },[])

  async function search() {
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=artist:' + searchInput + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => {return data.artists.items[0].id })

    var getAlbum = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include+groups=album&market=US&limit=50', searchParameters)
    .then(response => response.json())
    .then(data => {console.log(data),setAlbum(data.items)})
    
  }


  return (

   <>
   <Navbar handleInput={handleInput} handleSubmit={handleSubmit}/>
   
   <Flex justifyContent='space-between' margin='60px 140px' padding='40px' flexWrap='wrap'>
    {albums.map((albums, i) => {
      console.log(albums);
    <Card maxW='150px' boxShadow='dark-lg' margin='20px'>{/* card element containing about the music */}
    
    <CardBody display='flex' flexDirection='column'><Image src={albums.images[0].url} boxSize="100px" borderRadius='5px'/>{/* img of the music/artist*/}
    <Stack marginTop='20px'>{/* info about the music or podcast or album */}
        <Heading size='sm'>Music</Heading>
        <Text>Artist:{albums.name}</Text>
        <Text>Genre:</Text>
    </Stack>
    </CardBody>
    <CardFooter>{/* Star rating */}
        <Star />
    </CardFooter>
</Card>
})}
</Flex>
    <Footer />
    </>
  )
}

export default App
