import { Box, Container, Flex, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import './App.css';

const specials = [
    {
        title: "Greek Salad",
        price: "$12.00",
        description:
          "Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, and olive oil.",
        getImageSrc: () => (process.env.PUBLIC_URL + "/bruchetta.jpg"),
      },
      {
        title: "Bruchetta",
        price: "$12.00",
        description:
          "Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese.",
        getImageSrc: () => (process.env.PUBLIC_URL + "/bruchetta.jpg"),
      },
      {
        title: "Lemon Cake",
        price: "$12.00",
        description:
          "Soft lemon cake is made with seed oil instead of butter: The cake's smell and flavor come from the juice and zest of the lemons it contains.",
        getImageSrc: () => (process.env.PUBLIC_URL + "/bruchetta.jpg"),
      },
]

const Specials = () => {
  return (
    <Box paddingLeft= '10%'
    paddingRight= '10%'
    paddingTop= '50px'
    paddingButtom= '50px'>
      <Container >
      <Flex minWidth='max-content' gap='2'>
                <Box >
                  <h1>This week specials!</h1>
                </Box>
                <Spacer />
                <ButtonGroup>
                  <Button className="button2">Sign Up</Button>
                </ButtonGroup>
       </Flex>
       <Flex className="cards"
       display='grid'
       gridTemplateColumns= '1fr 1fr 1fr'
       gap='20'
       paddingTop= '50px'
       
        >
          {specials.map((specials) => (

            <Card 
                imageSrc={specials.getImageSrc()}
                key={specials.title}
                title={specials.title}
                price={specials.price}
                description={specials.description}
            />
          ))}

        </Flex>
      </Container>
    </Box>
  );
};

export default Specials;