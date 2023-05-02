
import React from 'react'
import {Flex, Box} from "@chakra-ui/react";
import './App.css';

const  Intro = () =>  (
<Flex className='flex1' 
    style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gridGap: '20px',
        background: '#495E57',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '50px',
        paddingBlock: '50px'
     }}>
   
   <Box className="box"
   style={{
    textAlign: 'left',
    paddingLeft: '10%',
    paddingRight: '10%',

 }}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterreanian Restaurant, focused on traditional recipes served with a modern twist.</p><br></br>
        <button className='button2'
        
        >Reserve a Table</button>
    </Box>
    <Box className="box">
        <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"} height='400px' style={{ borderRadius: '16px' }} alt="restaurantfood"/>
    </Box>
  </Flex>
);

export default Intro;