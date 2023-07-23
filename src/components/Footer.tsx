import { FC } from "react";

import { Stack, Container, Flex, Text, Button } from "@chakra-ui/react";

const Footer: FC = () => {

  return <Stack as="footer" id="community" bg="black" background="radial-gradient(circle, rgba(0,71,0,1) 0%, rgba(0,44,0,1) 24%, rgba(0,18,0,1) 100%)" pt="20" mt="0 !important">
        <Container pb="20">
          <Text as="h3" fontSize="2xl" color="white" textAlign="center" mb="12">Rejoins notre communauté !</Text>
          <Flex mt="4" flexDirection={{base:"column", md:"row"}} justifyContent="space-around">
            <Button cursor="pointer" my={{base:"2", md:"0"}} py="6" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => window.open('https://discord.gg/jnJXVAKwnV', "_blank")}>Discord</Button>
            <Button cursor="pointer" my={{base:"2", md:"0"}} py="6" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => window.open('https://instagram.com/hexofo', "_blank")}>Instagram</Button>
            <Button cursor="pointer" my={{base:"2", md:"0"}} py="6" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => window.open('https://twitter.com/hexofo_', "_blank")}>Twitter</Button>
          </Flex>
        </Container>
        <Flex justifyContent="center" p="4">
          <Text textAlign="center" color="teal">#<strong>HEXOFO</strong> { new Date().getFullYear() } &copy; <br/>Made with ReactJS, ChakraUI & WordPress REST API <br />Handmade by <a className="underline" href="https://anda.ninja" target="_blank" rel="noreferrer">@AndaLixe</a></Text>
        </Flex>
      </Stack>
}

export default Footer;