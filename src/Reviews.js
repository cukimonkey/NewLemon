import { Card as ChakraCard, CardFooter, Stack, HStack, Image, Heading, Text, Divider, Button as ChakraButton, ButtonGroup } from '@chakra-ui/react'

import React from "react";
import './App.css';

function Reviews ({ imageSrc, name })  {
return(
  <ChakraCard className="CardContainer" 
  style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      paddingBottom: '20px',
      marginBottom: '100px',

    }}>
      
    <Stack width='300px'>
        
            <Heading className="ReviewHeader" style={{
              fontSize: "24px", 
              fontFamily: "Markazi Text",
              marginTop: '20px',
              marginLeft: '20px',
              textAlign: 'start'
              }}>Rating</Heading>
    <HStack>
        <Image className="ReviewImage"
        src={imageSrc} 
        style={{
        height: '70px',
        width: '70px',
        padding: '20px'
        }} 
        alt='user'
        />
        <Text className="UserName" style={{
          fontSize: "16px", 
          fontFamily: 'Karla',
          marginRight: '20px', 
          textAlign: 'start'
          }}>{name}</Text>
    </HStack>
        
    </Stack>
    <Divider />
  <CardFooter>
    <ButtonGroup spacing='4'>
      <ChakraButton className='button3' style={{
        border: 'none',
        background: 'none',
        bottom: '5px',
        paddingTop: '10px',
        paddingLeft: '20px',
      }}>
        See review
      </ChakraButton>
    </ButtonGroup>
  </CardFooter>

  </ChakraCard>
);

}
export default Reviews;