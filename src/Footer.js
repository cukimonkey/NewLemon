import {Flex, Box } from "@chakra-ui/react";
import React from "react";

function Footer(){
return (
    <footer className='footer'>
    
      <Flex style={{
        display: "flex",
        justifyContent: "space-between",
        background: '#EDEFEE',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '50px',
        paddingBottom: '50px'
    }}>
      <Box className="footerElement">
            <img className="footerlogo" src={process.env.PUBLIC_URL + "/Footer logo.png"} height="150px" alt="logo"/>
      </Box>
      <Box className="footerElement">
        <ul className="footerList">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        </Box>
      <Box className="footerElement">
        <ul className="footerList">
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
        </ul>
      </Box>
      <Box className="footerelement">
      <ul className="footerList">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </ul>
        </Box>
    </Flex>
    </footer>
);
}

export default Footer;