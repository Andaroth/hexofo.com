import { FC } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Stack,
  Flex,
  Grid,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

const Home: FC = () => {
  return <Stack minH="100vh" justifyContent="space-around" pb="4">
    <Container>
      <Stack as="section" color="#0F0">
        <Image src="./logo512.png" h="200px" w="200px" alt="logo Hexofo" alignSelf="center" />
        <Text as="h1" display="none">Hexofo</Text>
        <Text as="h2" fontSize="2xl" textAlign="center">Nous&nbsp;sommes les plus grands créateurs&nbsp;de&nbsp;soirées de <Link to="https://highrise.game" target="_blank">HighRise</Link>&nbsp;France!</Text>
      </Stack>

      <Stack as="section" my="12">
        <Text as="h3" fontSize="xl" textAlign="center" color="white" mb="4">Bienvenue sur le site web de notre valeureux clan !</Text>
        <Text display="none">Où désirez-vous vous rendre ?</Text>
        <Grid templateColumns={{base:"1", md:"repeat(2, 1fr)"}} gap="6">
          <Button colorScheme="whatsapp" py="12" px="8">Sponsoring &amp; Promotion</Button>
          <Button colorScheme="teal" py="12" px="8" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://highrise.game/fr/support/safety/trust-and-safety', "_blank")}>Foire Aux Questions<span className="noMobile">&nbsp;(FAQ)</span></Button>
          <Button colorScheme="teal" py="12" px="8" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://highrise.helpshift.com/hc/fr/', "_blank")}>Aide HighRise</Button>
          <Button colorScheme="whatsapp" py="12" px="8"><span className="noMobile">Formulaire de&nbsp;</span>Recrutement</Button>
        </Grid>
      </Stack>

      <Stack as="section">
        <Text as="h3" fontSize="xl" color="white" textAlign="center" mb="4">Rejoignez notre communauté!</Text>
        <Flex mt="4" flexDirection={{base:"column", md:"row"}} justifyContent="space-around">
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://discord.gg/jnJXVAKwnV', "_blank")}>Discord</Button>
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://instagram.com/hexofo', "_blank")}>Instagram</Button>
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://twitter.com/hexofo_', "_blank")}>Twitter</Button>
        </Flex>
      </Stack>
    </Container>
  </Stack>
}

export default Home;