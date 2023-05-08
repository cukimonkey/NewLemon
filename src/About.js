import React from 'react'
import {Flex, Box} from "@chakra-ui/react";
import './App.css';


const  About = () =>  (
<Flex className='flex1' 
    style={{
        display:'flex',
         flexWrap: 'wrap',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '50px',
        paddingBlock: '50px',
     }}>
   
   <Box className="box2"
   style={{
    paddingLeft: '10%',
    paddingRight: '10%',
    maxWidth: '400px',
    backgroundColor: 'none', 
    textAlign: 'justify'

 }}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p><br></br>

    </Box>
    <Box className="imageBox">
        <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"}
        style={{ 
            height:'400px',
            borderRadius: '16px',
            }} 
            alt="restaurantfood"/>
           
    </Box>
  </Flex>
);

export default About;