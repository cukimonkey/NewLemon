
import React from 'react'
import {Flex, Box} from "@chakra-ui/react";
import './App.css';

const  Intro = () =>  (
<Flex className='flex1' 
    style={{
        display:'flex',
         flexWrap: 'wrap',
         flexGrow: '1',
        background: '#495E57',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '50px',
        paddingBottom: '50px'
     }}>
   
   <Box className="box"
   style={{
    textAlign: 'left',
    paddingLeft: '10%',
    paddingRight: '10%',
    maxWidth: '400px'

 }}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterreanian Restaurant, focused on traditional recipes served with a modern twist.</p><br></br>
        <button className='button2'
        
        >Reserve a Table</button>
    </Box>
    <Box className="imageBox">
        <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"} height='400px' style={{ borderRadius: '16px' }} alt="restaurantfood"/>
    </Box>
  </Flex>
);

export default Intro;