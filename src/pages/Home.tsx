import { FC } from "react";

import { Link } from "react-router-dom";

import { Link as Scroll } from "react-scroll";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'video-react/dist/video-react.css';

import { Player } from 'video-react';

import {
  Container,
  Stack,
  Flex,
  Box,
  Image,
  Text,
  Button,
  AspectRatio,
} from '@chakra-ui/react';

import { ExternalLinkIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons';

const Home: FC = () => {
  const events = [
    {
      name: "HR Live #HEXOFO",
      date: "24 Mars à 20h (CET)",
      img: "./events/340324.jpg",
      video: null, // "./video/63de15b7058ba9b0359065f7_0.mov",
      content: [
        "Soirée DJ Mix & Tips sur HR France organisée par le clan #HEXOFO! 💚",
      ],
      link: {
        url: "https://highrise.game/fr/room/63deadb458755bdf24dd7c27",
        label: "Voir la salle"
      }
    }
  ];

  return <Stack minH="100vh" pb="0">
    <Stack as="section" minH="100vh" justifyContent="space-around" mt="0 !important">
      <Container>
        <Text as="h1" display="none" fontSize="4xl" color="white" textAlign="center" mb="4">Hexofo</Text>
        <Image src="./logo512.png" alt="Hexofo logo" w="400px" mx="auto" />
        <Text as="h2" color="white" fontSize="2xl" fontWeight="400" textAlign="center">Les plus grosses&nbsp;soirées se passent <br />sur <Link className="underline" to="https://highrise.game" target="_blank">HighRise</Link>&nbsp;France!</Text>
        <Flex justifyContent="space-around" mt="8" py="6">
          <Scroll to="upcoming" smooth={true}>
            <Button as="div" className="heartbeat" cursor="pointer" bg="#0F0" borderRadius="18px" h="36px" rightIcon={<ChevronDownIcon />}>Découvrir</Button>
          </Scroll>
        </Flex>
      </Container>
    </Stack>

    { events.length ? <Stack as="section" id="upcoming"
      bg="blackAlpha.700"
      mt="0 !important"
      minH={{base:"100vh", md:"initial"}}
      justifyContent="space-around"
    >
      <Container py="8">
        <Text as="h3" fontSize="xl" mb="6" textAlign="center" color="white">&Eacute;vènement{events.length > 1 ? "s" : ""} à venir</Text>
          <Container>
            <Slider
              arrows={true}
              dots={true}
              autoplay={true}
              autoplaySpeed={5000}
              slidesToShow={1}
              slide="article"
            >
              { events.map(ev => <Stack as="article" key={events.indexOf(ev)} textAlign="center">
                { ev.name || ev.date ? <Stack color="white" mb="2" justifyContent="space-between">
                  { ev.name ? <Text fontSize="2xl">{ ev.name }</Text> : ''}
                  { ev.date ? <Text fontSize="xl" lineHeight="28px">{ ev.date }</Text> : ''}
                </Stack> : ''}
                { ev.img ? <Flex my="2" justifyContent="center">
                  <Image w="240px" h="240px" borderRadius="lg"
                    src={ev.img} alt={`${ev.name} thumbnail`} 
                    cursor={ ev.link ? "pointer" : "initial" }
                    onClick={() => ev.link ? window.open(ev.link.url, "_blank") : null}
                  />
                </Flex> : '' }
                { ev.video ? <Flex justifyContent="center">
                  <AspectRatio w="280px" ratio={1} borderRadius="lg" overflow="hidden" flexDirection="column" justifyContent="center">
                    <Player height={280} fluid={false} src={ev.video} autoPlay muted playsInline />
                  </AspectRatio>
                </Flex> : ''}
                { ev.content ? <Stack px="4" flexGrow="1">
                  { ev.content.map(c => <Text key={ev.content.indexOf(c)} textAlign="left" color="white" w="400px" mx="auto">{ c }</Text>) }
                </Stack> : ''}
                { ev.link ? <Flex justifyContent="center"><Button mt="2" borderRadius="2xl" rightIcon={!ev.link.url.startsWith('./') ? <ExternalLinkIcon /> : undefined} onClick={() => window.open(ev.link.url, "_blank")}>{ ev.link.label }</Button></Flex> : ''}
              </Stack>)}

              <Stack as="article" textAlign="center">
                <Stack color="white" mb="2" justifyContent="space-between">
                  <Text fontSize="2xl">Abonnes-toi !</Text>
                </Stack>
                <Flex my="2" justifyContent="center">
                  <AspectRatio w="240px" ratio={1}>
                    <Image borderRadius="lg"
                      src="./events/feed.png" alt="Feed thumbnail"
                      cursor="pointer"
                      onClick={() => window.open("https://highrise.game/fr/profile/AndaLixe", "_blank")}
                    />
                  </AspectRatio>
                </Flex>
                <Stack px="4" flexGrow="1">
                  <Text textAlign="center" color="white">Suis notre actualité sur HighRise <br/>pour ne manquer aucune soirée!</Text>
                </Stack>
                <Flex justifyContent="center"><Button mt="2" rightIcon={<ExternalLinkIcon />} borderRadius="2xl" onClick={() => window.open("https://highrise.game/fr/profile/AndaLixe", "_blank")}>Voir plus</Button></Flex>
              </Stack>
            </Slider>

            <Flex justifyContent="space-around" mt="12" py="6">
              <Scroll to="main" smooth={true}>
                <Button as="div" py="6" cursor="pointer" bg="#0F0" rightIcon={<ArrowDownIcon />} borderRadius="lg" h="36px">Visites notre site</Button>
              </Scroll>
            </Flex>

          </Container>
      </Container>
    </Stack> : ''}

    <Stack as="section" id="main"
      bg="url('./hexofo_flames.jpg')"
      backgroundSize="cover"
      backgroundPosition="top center"
      backgroundAttachment="fixed"
      mt="0 !important"
      flexDirection={{base:'column', md:'row'}}
    >
      <Flex as="div" className="overlay" position="relative" p="0" w="100vw" minH="100vh" justifyContent="space-around" bg="blackAlpha.600">
        <Stack justifyContent="center" className="player noMobile" py="4">
          <AspectRatio h="640px" w="480px" ratio={1}>
            <Flex justifyContent="center">
              <video height="640px" width="auto" src="./video/63de15b7058ba9b0359065f7_0.mov" muted autoPlay loop style={{borderRadius: "var(--chakra-radii-lg)"}} />
            </Flex>
          </AspectRatio>
        </Stack>
        <Stack justifyContent="space-around">
          <Container>
            <Box bg="blackAlpha.500" p="4" borderRadius="lg">
              <Text as="h3" color="white" fontSize="2xl">Bienvenue sur le site web de notre valeureux clan !</Text>
              <Text color="white" fontSize="xl">Où désires-tu aller ?</Text>
              <Stack my="6"><Button py="12" px="8" colorScheme="whatsapp">Sponsoring &amp; Promotion</Button></Stack>
              <Stack my="6"><Button py="12" px="8" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://forms.gle/xZCrMSCxsT9j2Kx5A', "_blank")}><span className="noMobile">Formulaire de&nbsp;</span>Recrutement</Button></Stack>
              <Stack my="6"><Button py="12" px="8" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://highrise.helpshift.com/hc/fr/', "_blank")}>Aide HighRise</Button></Stack>
            </Box>
          </Container>
        </Stack>
      </Flex>
    </Stack>

    <Stack as="section" bg="black" pt="20" mt="0 !important">
      <Container pb="20">
        <Text as="h3" fontSize="2xl" color="white" textAlign="center" mb="12">Rejoins notre communauté!</Text>
        <Flex mt="4" flexDirection={{base:"column", md:"row"}} justifyContent="space-around">
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://discord.gg/jnJXVAKwnV', "_blank")}>Discord</Button>
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://instagram.com/hexofo', "_blank")}>Instagram</Button>
          <Button my={{base:"2", md:"0"}} colorScheme="whatsapp" onClick={() => window.open('https://twitter.com/hexofo_', "_blank")}>Twitter</Button>
        </Flex>
      </Container>
      <Flex justifyContent="center" p="4">
        <Text textAlign="center" color="teal">#<strong>HEXOFO</strong> { new Date().getFullYear() } &copy; <br/>Made in React by <Link className="underline" to="https://anda.ninja" target="_blank">@AndaLixe</Link></Text>
      </Flex>
    </Stack>
    
  </Stack>
}

export default Home;