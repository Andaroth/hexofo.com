import { FC, useState } from "react";

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
  Grid,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';

import { ExternalLinkIcon, ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons';

const Home: FC = () => {
  const events: Array<{
    name: string
    date: string
    img?: string
    video?: null,
    content: Array<string>,
    link?: {
      url: string
      label: string
    }
  }> = [
    {
      name: "HR Live #HEXOFO",
      date: "24 Mars à 20h (CET)",
      img: "./events/230324.jpg",
      video: null,
      content: [
        "Énorme soirée DJ Mix & Tips organisée par l’incroyable clan français #HEXOFO avec @AndaLixe et @DJ_Jeebee! 💚",
      ],
      link: {
        url: "https://highrise.game/fr/room/63deadb458755bdf24dd7c27",
        label: "Voir la salle"
      }
    },
    {
      name: "Karaoke #HEXOFO",
      date: "13 Mars à 18h (CET)",
      img: "./events/230318.jpg",
      video: null,
      content: [
        "Karaoke Hexofo Open-Mic (17+) gratuit !! ",
      ],
      link: {
        url: "https://highrise.game/fr/room/63ac759c2ed5e6f11019f14f",
        label: "Voir la salle"
      }
    },
    {
      name: "Giveaway #HEXOFO",
      date: "06 Mars à 18h (CET)",
      img: "./events/230306.jpg",
      video: null,
      content: [
        "Giveaway par #HEXOFO ! 🎁 ✨ 2 x 100 #GOLD à GAGNER !! ",
      ],
      link: {
        url: "https://highrise.game/fr/post/6405dff14d11b0cd816ea85f",
        label: "Voir la publication"
      }
    },
  ];

  const [modalCollab,setModalCollab] = useState(false);
  const [modalJoin,setModalJoin] = useState(false);

  return <>
    <Stack minH="100vh" pb="0">
      <Stack as="section" bg="black" minH="calc(100vh - 24px)" justifyContent="space-around" mt="0 !important">
        <Container>
          <Stack bg="radial-gradient(circle, rgba(0,128,0,1) 0%, rgba(0,88,0,1) 39%, rgba(0,18,0,1) 100%)" backgroundSize={{base:"100vh", md:"100vw"}} backgroundPosition="center" className="fadeOpacity" position="absolute" top="0" left="0" w="100vw" h="calc(100vh - 24px)" />
          <Stack position="relative">
            <Text as="h1" display="none" fontSize="4xl" color="white" textAlign="center" mb="4">Hexofo</Text>
            <Flex justifyContent="center">
              <Image src="./logo512.png" alt="Hexofo logo" w="400px" mx="auto" />
            </Flex>
            <Text as="h2"
              color="white"
              maxW="calc(100vw - 40px)"
              fontSize={{base:"2xl", lg:"3xl"}}
              fontWeight="400"
              textAlign="center"
              fontFamily="'Ubuntu', sans-serif !important"
            >Les plus grosses&nbsp;soirées <span className="hidden">du métavers</span> se passent sur <Link className="underline" to="https://highrise.game/fr/feed/HEXOFO" target="_blank">HighRise</Link><span className="noMobile"> avec&nbsp;HEXOFO</span>!</Text>
            <Flex justifyContent="space-around" mt="8" py="6">
              <Scroll to="team" smooth={true}>
                <Button as="div" className="heartbeat" cursor="pointer" bg="#0F0" borderRadius="18px" h="36px" rightIcon={<ChevronDownIcon />}>Découvrir</Button>
              </Scroll>
            </Flex>
          </Stack>
        </Container>
      </Stack>

      <Stack as="section" id="team"
        bg="#070"
        background="linear-gradient(135deg, rgba(0,119,0,1) 0%, rgba(0,119,0,1) 35%, rgba(22,180,22,1) 100%)"
        color="white"
        mt="0 !important"
      >
        <Stack w="100vw" minH="100vh" m="0" p="0" bg="url('./Mascot.png')" bgPosition={{base:"bottom", md: "-100px 24px"}} bgRepeat="no-repeat" backgroundSize="contain" justifyContent="center">
          <Flex bgSize="contain" justify="center" pt="16" pb="4">
            <Container>
              <Text as="h3" mb="2" color="white" fontSize="3xl" textAlign="center">L'équipe #HEXOFO</Text>
              <Grid templateColumns={{base:"1", md:'repeat(3, 1fr)'}} gap={4}>
                <Flex className="user" bg="whiteAlpha.800" color="black" borderRadius="xl" justifyContent="center" p="2">
                  <Stack>
                    <Flex justifyContent="center">
                      <Image src="./AndaLixe.png" w="200px" alt="AndaLixe" />
                    </Flex>
                    <Stack>
                      <Text textAlign="center" fontSize="2xl">AndaLixe</Text>
                      <Text textAlign="center" fontSize="sm"><strong>Fondateur</strong> / <strong>Manager</strong> <br/>Lead</Text>
                    </Stack>
                  </Stack>
                </Flex>
                <Flex className="user" bg="whiteAlpha.800" color="black" borderRadius="xl" justifyContent="center" p="2">
                  <Stack>
                    <Flex justifyContent="center">
                      <Image src="./DJ_Camelico.png" w="200px" alt="DJ_Camelico" />
                    </Flex>
                    <Stack>
                      <Text textAlign="center" fontSize="2xl">DJ_Camelico</Text>
                      <Text textAlign="center" fontSize="sm"><strong>DJ</strong> / <strong>Admin</strong> <br/>Senior</Text>
                    </Stack>
                  </Stack>
                </Flex>
                <Flex className="user" bg="whiteAlpha.800" color="black" borderRadius="xl" justifyContent="center" p="2">
                  <Stack>
                    <Flex justifyContent="center">
                      <Image src="./DJ_Jeebee.png" w="200px" alt="DJ_Jeebee" />
                    </Flex>
                    <Stack>
                      <Text textAlign="center" fontSize="2xl">DJ_Jeebee</Text>
                      <Text textAlign="center" fontSize="sm"><strong>DJ</strong> / <strong>Promoteur</strong> <br/>Représentant</Text>
                    </Stack>
                  </Stack>
                </Flex>
              </Grid>
              <Text as="h4" mt="6" mb="2" color="white" fontSize="2xl" textAlign="center">Les chefs du clan</Text>
              <Grid templateColumns={{base:"1", md:'repeat(3, 1fr)'}} gap={4}>
                <Stack className="user" bg="blackAlpha.600" borderRadius="xl" p="2">
                  <Stack>
                    <Text textAlign="center" fontSize="2xl">Cyeme</Text>
                    <Text textAlign="center" fontSize="sm" lineHeight="36px">Admin / Organisatrice</Text>
                  </Stack>
                </Stack>
                <Stack className="user" bg="blackAlpha.600" borderRadius="xl" p="2">
                  <Stack>
                    <Text textAlign="center" fontSize="2xl">Elf_ie</Text>
                    <Text textAlign="center" fontSize="sm" lineHeight="36px">Admin / Modératrice</Text>
                  </Stack>
                </Stack>
                <Stack className="user" bg="blackAlpha.600" borderRadius="xl" p="2">
                  <Stack>
                    <Text textAlign="center" fontSize="2xl">D.Chtulhu</Text>
                    <Text textAlign="center" fontSize="sm" lineHeight="36px">Admin / Senior</Text>
                  </Stack>
                </Stack>
              </Grid>
            </Container>
          </Flex>
          <Flex justifyContent="space-around" pt={{base:"calc(100vw - 128px)", md:"4"}} pb="16">
            <Scroll to="upcoming" smooth={true}>
              <Button as="div" bg="white" borderBottom="4px solid #CCC" color="black" cursor="pointer" borderRadius="18px" h="36px" rightIcon={<ChevronDownIcon />}>Nos soirées</Button>
            </Scroll>
          </Flex>
        </Stack>
      </Stack>

      { events.length ? <Stack as="section" id="upcoming"
        bg="blackAlpha.400"
        mt="0 !important"
        minH={{base:"100vh", md:"initial"}}
        justifyContent="space-around"
      >
        <Stack w="100vw" minH="100vh" m="0" p="0" bg="url('./Mascot2.png')" bgPosition={{base:"bottom", md: "calc(50vw) 24px"}} bgRepeat="no-repeat" backgroundSize="contain">
          <Stack bg="blackAlpha.300" minH="100vh" w="100vw" m="0" p="0" justifyContent="center">
            <Flex bgSize="contain" justify="center" pt="16" pb="4">
              <Container py="16">
                <Text as="h3" fontSize="3xl" mb="6" textAlign="center" color="white">&Eacute;vènement{events.length > 1 ? "s" : ""} à venir</Text>
                  <Container>
                    <Box bg="blackAlpha.400" pt="2" m="2" borderRadius="lg">
                      <Slider
                        arrows={true}
                        dots={true}
                        autoplay={true}
                        autoplaySpeed={10000}
                        pauseOnDotsHover={true}
                        pauseOnFocus={true}
                        slidesToShow={1}
                        slide="article"
                      >
                        { events.map(ev => <Stack as="article" key={events.indexOf(ev)} textAlign="center" pb="4">
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
                            { ev.content.map(c => <Text key={ev.content.indexOf(c)} textAlign="center" fontSize={{base:"lg", md:"xl"}} color="white" w={{base:"240px", md:"400px"}} maxW="calc(100vw - 88px)" mx="auto">{ c }</Text>) }
                          </Stack> : ''}
                          { ev.link ? <Flex justifyContent="center"><Button mt="2" borderRadius="24px" rightIcon={!ev.link.url.startsWith('./') ? <ExternalLinkIcon /> : undefined} onClick={() => ev.link ? window.open(ev.link.url, "_blank") : null}>{ ev.link.label }</Button></Flex> : ''}
                        </Stack>)}

                        <Stack as="article" textAlign="center">
                          <Stack color="white" mb="2" justifyContent="space-between">
                            <Text fontSize="2xl">Abonne-toi !</Text>
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
                          <Flex justifyContent="center"><Button mt="2" rightIcon={<ExternalLinkIcon />} borderRadius="24px" onClick={() => window.open("https://highrise.game/fr/profile/AndaLixe", "_blank")}>Voir plus</Button></Flex>
                        </Stack>
                      </Slider>
                    </Box>

                    <Flex justifyContent="center" pt={{base:"calc(100vw - 128px)", md:"12"}} mb="4">
                      <Scroll to="main" smooth={true}>
                        <Button as="div" py="6" cursor="pointer" color="black" bg="#0F0" borderBottom="4px solid #070" _hover={{bg: "#0C0"}} rightIcon={<ArrowDownIcon />} borderRadius="xl">Visite notre site</Button>
                      </Scroll>
                    </Flex>

                  </Container>
              </Container>
            </Flex>
          </Stack>
        </Stack>
      </Stack> : ''}

      <Stack as="section" id="main"
        backgroundImage={{base:"url('./hexofo_big_mobile.jpg')", md:"url('./hexofo_big.jpg')"}}
        backgroundPosition={{base:"center", md:"top"}}
        backgroundAttachment={{base:"initial", md:"fixed"}}
        backgroundSize="cover"
        mt="0 !important"
        flexDirection={{base:'column', md:'row'}}
      >
        <Flex as="div" className="overlay" position="relative" p="0" w="100vw" minH="100vh" bg="blackAlpha.600" justifyContent="center">
          <Stack justifyContent="center">
            <Flex>
              <Stack justifyContent="center" className="player noMobile" py="4">
                <AspectRatio h="640px" w="480px" ratio={1}>
                  <Flex justifyContent="center">
                    <video height="640px" width="auto" src="./video/63de15b7058ba9b0359065f7_0.mov" muted autoPlay loop style={{borderRadius: "var(--chakra-radii-lg)"}} />
                  </Flex>
                </AspectRatio>
              </Stack>
              <Stack justifyContent="space-around">
                <Box bg="blackAlpha.500" p="4" borderRadius="lg" w="100%">
                  <Text as="h3" mb="4" color="white" textAlign="center" fontSize="2xl">Bienvenue sur notre site !</Text>
                  <Text color="white" textAlign="center" fontSize="xl">Où désires-tu aller ?</Text>
                  <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => setModalCollab(true)}><span className="noMobile">Formulaire de&nbsp;</span>Collaboration</Button></Stack>
                  <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => setModalJoin(true)}><span className="noMobile">Formulaire de&nbsp;</span>Recrutement</Button></Stack>
                  <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #777" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://highrise.helpshift.com/hc/fr/', "_blank")}>Aide HighRise</Button></Stack>
                </Box>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Stack>

      <Stack as="footer" id="community" bg="black" background="radial-gradient(circle, rgba(0,71,0,1) 0%, rgba(0,44,0,1) 24%, rgba(0,18,0,1) 100%)" pt="20" mt="0 !important">
        <Container pb="20">
          <Text as="h3" fontSize="2xl" color="white" textAlign="center" mb="12">Rejoins notre communauté !</Text>
          <Flex mt="4" flexDirection={{base:"column", md:"row"}} justifyContent="space-around">
            <Button my={{base:"2", md:"0"}} py="6" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => window.open('https://discord.gg/jnJXVAKwnV', "_blank")}>Discord</Button>
            <Button my={{base:"2", md:"0"}} py="6" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => window.open('https://instagram.com/hexofo', "_blank")}>Instagram</Button>
            <Button my={{base:"2", md:"0"}} py="6" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => window.open('https://twitter.com/hexofo_', "_blank")}>Twitter</Button>
          </Flex>
        </Container>
        <Flex justifyContent="center" p="4">
          <Text textAlign="center" color="teal">#<strong>HEXOFO</strong> { new Date().getFullYear() } &copy; <br/>Made in ReactJS by <Link className="underline" to="https://anda.ninja" target="_blank">@AndaLixe</Link></Text>
        </Flex>
      </Stack>
      
    </Stack>

    <Modal isOpen={modalCollab} onClose={() => setModalCollab(false)} isCentered motionPreset="slideInBottom" closeOnOverlayClick={false} size="full">
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
      />
      <ModalContent>
        <ModalHeader color="white">Collaboration</ModalHeader>
        <ModalCloseButton bg="#0F0" borderRadius="50%" />
        <ModalBody pb="2">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScc3HjIt7VB0LK-IMGOWdTokFMVLPsG6etj0rJrj0YlCc73OQ/viewform?usp=sf_link" style={{
            border: "0",
            height: "calc(100vh - 120px)",
            width: "100%",
            borderRadius: "8px",
            background: "radial-gradient(circle, rgba(0,128,0,1) 0%, rgba(0,88,0,1) 39%, rgba(0,18,0,1) 100%)"
          }} />
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal isOpen={modalJoin} onClose={() => setModalJoin(false)} isCentered motionPreset="slideInBottom" closeOnOverlayClick={false} size="full">
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
      />
      <ModalContent>
        <ModalHeader color="white">Recrutement</ModalHeader>
        <ModalCloseButton bg="#0F0" borderRadius="50%" />
        <ModalBody pb="2">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOq61gb-sET6_GV5QiaxjcecQhGlajB-qn7_C-n_j8fKebCQ/viewform?usp=sf_link" style={{
            border: "0",
            height: "calc(100vh - 120px)",
            width: "100%",
            borderRadius: "8px",
            background: "radial-gradient(circle, rgba(0,128,0,1) 0%, rgba(0,88,0,1) 39%, rgba(0,18,0,1) 100%)"
          }} />
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}

export default Home;