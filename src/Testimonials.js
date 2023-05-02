import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Reviews from "./Reviews";
import './App.css';

const reviews = [
    {
        name: "John Smith",
        getImageSrc: () => (process.env.PUBLIC_URL + "/john.jpg"),
      },
      {
        name: "Erica Thompson",
        getImageSrc: () => (process.env.PUBLIC_URL + "/erica.jpg"),
      },
      {
        name: "Leo Stark",
        getImageSrc: () => (process.env.PUBLIC_URL + "/leo.jpg"),
      },
      {
        name: "Eva Reader",
        getImageSrc: () => (process.env.PUBLIC_URL + "/eva.jpg"),
      },
]

const Testimonials = () => {
  return (
    <Box paddingLeft= '10%'
    paddingRight= '10%'
    paddingTop= '50px'
    paddingButtom= '50px'>
      <Container >
      <Flex minWidth='max-content' gap='2'>
                <Box >
                  <h1>Testimonials</h1>
                </Box>
       </Flex>
       <Flex className="cards2"
       display='grid'
       gridTemplateColumns= '1fr 1fr 1fr'
       gap='20'
       paddingTop= '50px'

        >
          {reviews.map((reviews) => (

            <Reviews
                imageSrc={reviews.getImageSrc()}
                key={reviews.title}
                name={reviews.title}
            />
          ))}

        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonials;