import { Card as ChakraCard, CardBody, CardFooter, Stack, HStack, Image, Heading, Text, Divider, Button as ChakraButton, ButtonGroup } from '@chakra-ui/react'

import React from "react";
import './App.css';

function Card ({ title, price, description, imageSrc })  {
return(
  <ChakraCard className="CardContainer" 
  style={{
      backgroundColor: '#EDEFEE',
      borderTopRightRadius: '16px',
      borderTopLeftRadius: '16px',
      paddingBottom: '20px',
      width: '300px',
      height: 'auto'
    }}>

    <CardBody>
      <Image className="CardImage"
      src={imageSrc} 
      style={{width:'300px',
      borderTopRightRadius: '16px',
      borderTopLeftRadius: '16px',
      height: '200px',
      objectFit: 'cover',
      }} 
      alt='food'
      />
    <Stack style={{ paddingBottom: '40px'}}>
        <HStack style={{display: 'flex', justifyContent: 'space-between' }}>
            <Heading className="CardHeader" style={{
              fontSize: "24px", 
              fontFamily: "Markazi Text",
              marginTop: '20px',
              marginLeft: '20px',
              textAlign: 'start'
              }}>{title}</Heading>
            <Text className="CardPrice" style={{
              fontSize: "16px", 
              marginTop: '20px',
              fontFamily: 'Karla',
              marginRight: '20px',
              textAlign: 'end',
              color: '#EE9972',
              }}>{price}</Text>
        </HStack>
        <Text className="CardDescription" style={{
          fontSize: "16px", 
          fontFamily: 'Karla',
          margin: '20px', 
          textAlign: 'justify'
          }}>{description}</Text>
    </Stack>
    </CardBody >
    <Divider />
  <CardFooter>
    <ButtonGroup spacing='4'>
      <ChakraButton style={{
        border: 'none',
        margin: '20px',
        position: 'absolute',
        bottom: '5px',
        paddingTop: '20px'
      }}>
        Order now
      </ChakraButton>
    </ButtonGroup>
  </CardFooter>

  </ChakraCard>
);

}
export default Card;