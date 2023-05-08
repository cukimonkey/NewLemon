
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import './App.css';

function BookingConfirmation() {
    return (
    <Flex className="holdingWrap" style={{
        height: '800px',
        overflow: "hidden",
        position: "relative"
    }}>
        <Box>
        <img src={process.env.PUBLIC_URL + "/pasta.jpg"} style={{
            opacity: '0.4',
            position: "absolute",
            left: '0',
            top: '0',
            width: '100%',
            height: 'auto',
            paddingTop: '50px',
            paddingBottom: '50px'
        }} alt='holding page'/>
        </Box>

            <Box className="content" style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: "relative"
                  }}>

            <h1>Thank you!</h1>
            <h2>We have your table. </h2>
            </Box>
    </Flex>
    )
}

export default BookingConfirmation;
