import { FC } from "react";

import { Link } from "react-router-dom";

import { Link as Scroll } from "react-scroll";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Container,
  Stack,
  Flex,
  Box,
  Image,
  Text,
  Button,
  Spacer
} from '@chakra-ui/react';

import { ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Home: FC = () => {
  const events = [
    {
      name: "HR Talent",
      date: "10/10/23",
      content: [
        "Welcome to Survival, a playable murder mystery game where you can either do the killing or the protecting. Put your detective skills to the test and find out who is committing such atrocities. Do you dare to test your luck? Do you have what it takes to survive the night? All participants will win a gold prize, and multiple rounds of the game will be played with 25 players per round.",
      ],
      link: {
        url: "/",
        label: "Learn more"
      }
    },
    {
      name: "HR Karaoke",
      date: "12/10/23",
      content: [
        "Welcome to the Chronicle Corner! A space for terrifying tales, fantastical fiction and all of the realms between. Enjoy 3 HOURS of live narration and interactive games from top vocalist @NineViolets & Co Hosts. Dare you dive into the unknown and let your imagination run wild?",
      ],
      link: {
        url: "/",
        label: "Discover"
      }
    },
    {
      name: "HEXOFO",
      date: "16/10/23",
      content: [
        "Not all that it seems for the Far Realms of HighRise. As a distant world falls into petrified chaos we will embark on a Magical Journey as we follow our Heroes on a Quest to restore the long-forgotten magical balance of their new world.  Welcome to HR’s Dungeons and Dragons will challenge our players to explore ancient lore, encounter fiendish foes, and risk it all with a roll of the dice.",
      ],
      link: {
        url: "/",
        label: "About"
      }
    },
  ];

  return <Stack minH="100vh" pb="0">
    <Stack as="section" minH="100vh" justifyContent="space-around">
      <Container>
        <Image src="./logo512.png" h="200px" w="200px" alt="logo Hexofo" mx="auto" />
        <Text as="h1" display="none">Hexofo</Text>
        <Text as="h2" color="white" fontSize="2xl" fontWeight="400" textAlign="center">Nous&nbsp;sommes les plus grands créateurs&nbsp;de&nbsp;soirées de <Link className="underline" to="https://highrise.game" target="_blank">HighRise</Link>&nbsp;France!</Text>
        <Box my="8" p="8" bg="blackAlpha.500" borderRadius="xl">
          <Slider
            arrows={true}
            dots={true}
            autoplay={true}
            autoplaySpeed={5000}
            slidesToShow={1}
          >
            { events.map(ev => <Stack as="div" textAlign="center">
              <Flex color="white" px="2">
                <Text fontSize="xl">{ ev.name }</Text>
                <Spacer />
                <Text lineHeight="28px">{ ev.date }</Text>
              </Flex>
              <hr />
              <Stack px="2">
                { ev.content.map(c => <Text textAlign="left" color="white">{ c }</Text>)}
                { ev.link ? <Button mt="2" onClick={() => window.open(ev.link.url, "_blank")}>{ ev.link.label }</Button> : ''}
              </Stack>
            </Stack>)}
          </Slider>
        </Box>
        <Flex justifyContent="space-around" mt="8" py="6">
          <Scroll to="main" smooth={true}>
            <Button as="div" cursor="pointer" bg="whiteAlpha.500" borderRadius="18px" h="36px" rightIcon={<ChevronDownIcon />}>Visiter</Button>
          </Scroll>
        </Flex>
      </Container>
    </Stack>

    <Flex as="section" id="main"
      minH="100vh"
      justifyContent="space-around"
      bg="url('./hexofo_flames.jpg')"
      backgroundSize="cover"
      backgroundPosition="top center"
      backgroundAttachment="fixed"
    >
      <Stack justifyContent="space-around">
        <Container>
          <Box bg="blackAlpha.800" color="white" borderRadius="xl" p="4" mb="4">
            <Text as="h3" fontSize="xl" textAlign="center">Bienvenue sur le site web de notre valeureux clan !</Text>
            <Text>Où désirez-vous vous rendre ?</Text>
          </Box>
          <Stack>
            <Button py="12" px="8">Sponsoring &amp; Promotion</Button>
            <Button py="12" px="8" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://highrise.game/fr/support/safety/trust-and-safety', "_blank")}>Foire Aux Questions<span className="noMobile">&nbsp;(FAQ)</span></Button>
            <Button py="12" px="8" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://highrise.helpshift.com/hc/fr/', "_blank")}>Aide HighRise</Button>
            <Button py="12" px="8"><span className="noMobile">Formulaire de&nbsp;</span>Recrutement</Button>
          </Stack>
        </Container>
      </Stack>
    </Flex>

    <Stack as="section" bg="black" py="4" mt="0 !important">
      <Container>
        <Text as="h3" fontSize="xl" color="white" textAlign="center" mb="4">Rejoignez notre communauté!</Text>
        <Flex mt="4" flexDirection={{base:"column", md:"row"}} justifyContent="space-around">
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://discord.gg/jnJXVAKwnV', "_blank")}>Discord</Button>
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://instagram.com/hexofo', "_blank")}>Instagram</Button>
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://twitter.com/hexofo_', "_blank")}>Twitter</Button>
        </Flex>          
      </Container>
    </Stack>
    
  </Stack>
}

export default Home;