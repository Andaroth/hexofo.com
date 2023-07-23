import { FC, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Link as Scroll } from "react-scroll";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'video-react/dist/video-react.css';

import TopBar from "../components/TopBar";

import { useNavigate } from "react-router-dom";

import Blogroll from "../components/Blogroll";

import Footer from "../components/Footer";

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
  ModalCloseButton,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer
} from '@chakra-ui/react';

import { ExternalLinkIcon, ChevronDownIcon, CalendarIcon } from '@chakra-ui/icons';

const Home: FC = () => {
  const navigate = useNavigate()
  const handleNavigate = (link:string) => {
    if (link.startsWith('https://')) window.open(link,'_blank')
    else {
      window.scrollTo(0, 0)
      navigate(link)
    }
  }

  const [wpEvents, setArticles]: [Array<any>, any] = useState([])
  const [wpMedias, setMedias]: [Array<any>, any] = useState([])
  const WP_API = "https://hexofo.com/blog/wp-json/wp/v2/"
  
  useEffect(() => {
    if (!wpEvents.length) {
      fetch(WP_API + "media?per_page=30").then((res) => res.json()).then(medias => {
        setMedias(medias)
        fetch(WP_API + "posts?categories=4").then((res) => res.json()).then(res => {
          const articles: Array<any> = []
          res.forEach((article: any) => {
            const matchMedia = wpMedias.find((media: any) => media.id === article.featured_media)
            const date = new Date(article.date)
            const month = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",][date.getMonth()]
            const day = date.getDate()
            const hours = date.getHours()
            const minutes = ('0' + (date.getMinutes())).slice(-2)
            const wpArticle:any = {
              name: article.title.rendered,
              date: `${day} ${month} à ${hours}h${minutes}`,
              img: matchMedia?.source_url || "https://hexofo.com/logo512.png",
              // content: article.alt_text,
              link: article.link
            }
            articles.push(wpArticle)
          })
          setArticles(articles);
        })
      })
    }
  })

  const [wpUsers, setUsers]: [Array<any>, any] = useState([])
  const [wpFonda, setFonda]: [Array<any>, any] = useState([])
  const [wpChief, setChief]: [Array<any>, any] = useState([])
  const [wpAdmins, setAdmins]: [Array<any>, any] = useState([])
  
  useEffect(() => {
    if (!wpUsers.length) {
      fetch(WP_API + "users?per_page=20").then((res) => res.json()).then(users => {
        setUsers(users)
        setFonda(users.filter((u:any) => u.roles.includes('founder')))
        setChief(users.filter((u:any) => u.roles.includes('superchief')))
        setAdmins(users.filter((u:any) => u.roles.includes('crewadmin')))
        // console.log('users', wpFonda, wpChief, wpAdmins)
      })
    }
  })


  const shouldOpenCalendar = ():boolean => window.location.href.includes('/calend') || window.location.href.includes('/date')
  const shouldOpenCollab = ():boolean => window.location.href.includes('/collab') || window.location.href.includes('/event') || window.location.href.includes('/hrlive')
  const shouldOpenJoin = ():boolean => window.location.href.includes('join') || window.location.href.includes('inscri')

  const [modalCalendar,setModalCalendar] = useState(shouldOpenCalendar());
  const [modalCollab,setModalCollab] = useState(shouldOpenCollab());
  const [modalJoin,setModalJoin] = useState(shouldOpenJoin());

  return <>
    <Stack minH="100vh" pb="0" id="top">
      <Stack as="section" bg="black" minH="calc(100vh - 24px)" justifyContent="space-around" mt="0 !important">
        <Container>
          <Stack
            bg="radial-gradient(circle, rgba(0,128,0,1) 0%, rgba(0,88,0,1) 39%, rgba(0,18,0,1) 100%)"
            backgroundSize={{base:"100vh", md:"100vw"}}
            backgroundPosition="center"
            className="fadeOpacity"
            position="absolute"
            top="0"
            left="0"
            w="100vw"
            h="calc(100vh - 24px)" 
          />
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
            >Les plus grosses&nbsp;soirées <span className="hidden">du métavers</span> se passent sur <Link className="underline" to="https://highrise.game/fr/feed/HEXOFO" target="_blank">HighRise</Link> avec&nbsp;HEXOFO&nbsp;!</Text>
            <Flex justifyContent="center" mt="8" py="6">
              {/* <Flex justifyContent="center" mr="4">
                <Scroll to="upcoming" smooth={true}>
                  <Button as="div" cursor="pointer" bg="white" borderRadius="18px" h="36px">Soirées</Button>
                </Scroll>
              </Flex> */}
              <Flex justifyContent="center" flexDirection={{base:"column",md:"row"}}>
                <Flex justifyContent="center" mb={{base:"8", md:"0"}} mr={{base:"0", md:"4"}}>

                  <Button as="div" bg="white" cursor="pointer" borderRadius="18px" py={{ base: "6", md: "initial" }} minH="36px"
                    onClick={() => window.open('https://hexofo.myspreadshop.fr', '_blank')}
                    rightIcon={<ExternalLinkIcon />}
                  >Boutique</Button>

                </Flex>
                <Flex justifyContent="center">
                  <Scroll to="team" smooth={true}>
                    <Button as="div" className="heartbeat" cursor="pointer" bg="#0F0" borderRadius="18px" py={{base:"6",md:"initial"}} minH="36px" rightIcon={<ChevronDownIcon />}>Découvrir</Button>
                  </Scroll>
                </Flex>
              </Flex>
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
        <Stack w="100vw" minH="100vh" m="0" p="0" bg="url('./Mascot.png')" bgPosition={{base:"0 calc(100% - 64px)", md: "-100px 24px"}} bgRepeat="no-repeat" backgroundSize="contain" justifyContent="center">
          <Flex bgSize="contain" justify="center" pt="16" pb="4">
            <Container>
              <Text as="h3" mb="2" color="white" fontSize="3xl" textAlign="center">L'équipe #HEXOFO</Text>
              <Grid templateColumns={{base:"1", md:'repeat(3, 1fr)'}} gap={4}>
                <Flex className="user hoverPop"
                  bg="whiteAlpha.800"
                  color="black"
                  borderRadius="xl"
                  justifyContent="center"
                  p="2"
                  cursor="pointer"
                  onClick={() => window.open("https://highrise.game/fr/profile/AndaLixe", "_blank")}
                >
                  <Stack>
                    <Flex justifyContent="center">
                      <Image src="./AndaLixe.png" w="200px" alt="AndaLixe" />
                    </Flex>
                    <Stack>
                      <Text textAlign="center" fontSize="2xl">AndaLixe</Text>
                      <Text textAlign="center" fontSize="sm"><strong>Fondateur</strong> / <strong>Manager</strong> <br/>Leader</Text>
                    </Stack>
                  </Stack>
                </Flex>
                <Flex className="user hoverPop"
                  bg="whiteAlpha.800"
                  color="black"
                  borderRadius="xl"
                  justifyContent="center"
                  p="2"
                  cursor="pointer"
                  onClick={() => window.open("https://highrise.game/fr/profile/DJ_Camelico", "_blank")}
                >
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
                <Flex className="user hoverPop"
                  bg="whiteAlpha.800"
                  color="black"
                  borderRadius="xl"
                  justifyContent="center"
                  p="2"
                  cursor="pointer"
                  onClick={() => window.open("https://highrise.game/fr/profile/DJ_Jeebee", "_blank")}
                >
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
              <Text as="h4" mt="6" mb="2" color="white" fontSize="2xl" textAlign="center">Les chefs de clan</Text>
              <Grid templateColumns={{base:"1", md:'repeat(3, 1fr)'}} gap={4}>
                {wpChief.map((user: any) => {
                  return <Stack className="user hoverPop" bg="blackAlpha.600" borderRadius="xl" p="2" cursor="pointer" onClick={() => window.open(`https://highrise.game/fr/profile/${user.name}`, "_blank")}>
                  <Stack>
                    <Text textAlign="center" fontSize="2xl">{ user.name }</Text>
                    <Text textAlign="center" fontSize="sm" lineHeight="36px">{ user.description }</Text>
                  </Stack>
                </Stack>
                })}
              </Grid>

              <Accordion allowToggle>
                <AccordionItem my="4" border="0">
                  <AccordionButton bg="transparent" w="100%">
                    <Button as="h4" mt="6" mb="2" color="white" fontSize="2xl" textAlign="center" m="0 auto" size="lg" colorScheme="green" rightIcon={<AccordionIcon />}>Voir les admins</Button>
                  </AccordionButton>
                  <AccordionPanel>
                    <Grid templateColumns={{base:"1", md:'repeat(3, 1fr)'}} gap={4}>
                      {wpAdmins.map((user:any) => {
                        return <Stack className="user hoverPop" bg="blackAlpha.600" borderRadius="xl" p="2" cursor="pointer" onClick={() => window.open(`https://highrise.game/fr/profile/${user.name}`, "_blank")}>
                        <Stack>
                          <Text textAlign="center" fontSize="2xl">{ user.name }</Text>
                        </Stack>
                      </Stack>
                      }) }
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Container>
          </Flex>
          <Flex justifyContent="space-around" pt={{ base: "calc(100vw - 48px)", md: "4" }} pb="8">
            <Spacer />
            <Button as="div" bg="#0F0" borderBottom="4px solid #070" color="black" cursor="pointer" borderRadius="18px" h="36px" rightIcon={<ExternalLinkIcon />} mr="2"
              onClick={() => window.open('https://hexofo.com/blog', '_blank')}
            >Notre blog</Button>
            <Scroll to="upcoming" smooth={true}>
              <Button as="div" bg="white" borderBottom="4px solid #CCC" color="black" cursor="pointer" borderRadius="18px" h="36px" rightIcon={<ChevronDownIcon />}>Nos soirées</Button>
            </Scroll>
            <Spacer />
          </Flex>
        </Stack>
      </Stack>

      { <Stack as="section" id="upcoming"
        bg="blackAlpha.400"
        mt="0 !important"
        minH={{base:"100vh", md:"initial"}}
        justifyContent="space-around"
      >
        <Stack w="100vw" minH="100vh" m="0" p="0" bg="url('./Mascot2.png')" bgPosition={{base:"0 calc(100% - 128px)", md: "calc(50vw) 24px"}} bgRepeat="no-repeat" backgroundSize="contain">
          <Stack minH="100vh" w="100vw" m="0" p="0" justifyContent="center">
            <Flex bgSize="contain" justify="center" pt="16" pb="4">
              <Container py="16" pb={{base:"0", md:"16"}}>
                <Text as="h3" fontSize="3xl" mb="6" textAlign="center" color="white">Nos soirées</Text>
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
                      {wpEvents.map(ev => <Stack as="article" key={wpEvents.indexOf(ev)} textAlign="center" pb="4">
                        <Stack color="white" mb="2" justifyContent="space-between"
>
                            <Text fontSize="2xl">{ev.name}</Text>
                            <Text fontSize="xl" lineHeight="28px">{ev.date}</Text>
                            <Flex my="2" justifyContent="center">
                            <Image w="240px" h="240px" borderRadius="lg" src={ev.img} alt={`${ev.name} thumbnail`}
                              cursor={ ev.link ? "pointer" : "initial" }
                              onClick={() => ev.link ? window.open(ev.link, "_blank") : null}
                            />
                            </Flex>
                            </Stack>
                          </Stack>
                        )}

                        <Stack as="article" textAlign="center" mb="2">
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
                          {/* <Flex justifyContent="center"><Button mt="2" rightIcon={<ExternalLinkIcon />} borderRadius="24px" onClick={() => window.open("https://highrise.game/fr/profile/AndaLixe", "_blank")}>Voir plus</Button></Flex> */}
                        </Stack>
                      </Slider>
                    </Box>

                    <Flex justifyContent="center" flexDirection={{base:"column", md:"row"}} pt={{base:"100vw", md:"12"}} mb="4">
                      <Flex justifyContent="center" mb="2">
                        <Button minW={{base:"160px", md: "auto"}} onClick={() => window.open('https://calendar.google.com/calendar/u/0/embed?src=52e6cc8e24869170880be720289d52b4360782553828f57d80f7cfedea1a6efb@group.calendar.google.com&ctz=Europe/Paris', '_blank')} py="6" cursor="pointer" color="black" bg="white" borderBottom="4px solid #777" leftIcon={<CalendarIcon />} rightIcon={<ExternalLinkIcon />} borderRadius="xl"
                          mr={{base:"O", md:"2"}}
                        >Calendrier</Button>
                      </Flex>
                      <Flex justifyContent="center">
                        <Scroll to="main" smooth={true}>
                          <Button minW={{base:"160px", md: "auto"}} as="div" py="6" cursor="pointer" color="black" bg="#0F0" borderBottom="4px solid #070" _hover={{bg: "#0C0"}} rightIcon={<ChevronDownIcon />} borderRadius="xl">En savoir plus</Button>
                        </Scroll>
                      </Flex>
                    </Flex>

                  </Container>
              </Container>
            </Flex>
          </Stack>
        </Stack>
      </Stack> }

      <Blogroll />

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
              <Stack justifyContent="center" className="player noMobile" py="4" mr="6">
                <AspectRatio h="500px" w="360px" ratio={1} overflow="hidden">
                  <Flex justifyContent="center" borderRadius="lg">
                    <video width="360px" height="auto" src="./video/hexofo.mov" muted autoPlay loop />
                  </Flex>
                </AspectRatio>
              </Stack>
              <Stack justifyContent="space-around">
                <Box bg="blackAlpha.500" p="4" borderRadius="lg" w="100%">
                  <Text as="h3" mb="4" color="white" textAlign="center" fontSize="2xl">Bienvenue chez Hexofo</Text>
                  {/* <Text color="white" textAlign="center" fontSize="xl">Nous sommes spécialistes de HR!</Text> */}
                  <Text color="white" textAlign="center">Comment pouvons-nous t'aider ?</Text>
                  {/* <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" rightIcon={<ExternalLinkIcon />}  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScOq61gb-sET6_GV5QiaxjcecQhGlajB-qn7_C-n_j8fKebCQ/viewform?usp=sf_link', "_blank")}><span className="noMobile">Formulaire de&nbsp;</span>Recrutement</Button></Stack> */}
                  <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" onClick={() => handleNavigate("/guide")}>Guide Hexofo</Button></Stack>
                  <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #070" colorScheme="whatsapp" rightIcon={<ExternalLinkIcon />}  onClick={() => window.open('https://bit.ly/hexoshop', "_blank")}><span className="noMobile">Notre&nbsp;</span>Boutique</Button></Stack>
                  {/* <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #777" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScc3HjIt7VB0LK-IMGOWdTokFMVLPsG6etj0rJrj0YlCc73OQ/viewform?usp=sf_link', "_blank")}><span className="noMobile">Formulaire de&nbsp;</span>Collaboration</Button></Stack> */}
                  <Stack my="6"><Button py="12" px="8" borderBottom="4px solid #777" rightIcon={<ExternalLinkIcon />} onClick={() => window.open('https://hexofo.com/blog', "_blank")}>Le Blog</Button></Stack>
                </Box>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Stack>

      <Footer />
      
    </Stack>

    <Modal isOpen={modalCalendar} onClose={() => setModalCalendar(false)} isCentered motionPreset="slideInBottom" closeOnOverlayClick={false} size="full">
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
      />
      <ModalContent>
        <ModalHeader color="white">Calendrier</ModalHeader>
        <ModalCloseButton bg="#0F0" borderRadius="50%" />
        <ModalBody pb="2">
        <Spinner color="#0F0" position="fixed" top="50vh" left="50vw" transform="translate(-50%,-50%)" zIndex="-1" />
          <iframe title="calendar" src="https://calendar.google.com/calendar/u/0/embed?src=52e6cc8e24869170880be720289d52b4360782553828f57d80f7cfedea1a6efb@group.calendar.google.com&ctz=Europe/Paris" style={{
            border: "0",
            height: "calc(100vh - 120px)",
            width: "100%",
            borderRadius: "8px",
            zIndex: "10",
            // background: "radial-gradient(circle, rgba(0,128,0,1) 0%, rgba(0,88,0,1) 39%, rgba(0,18,0,1) 100%)",
          }} />
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal isOpen={modalCollab} onClose={() => setModalCollab(false)} isCentered motionPreset="slideInBottom" closeOnOverlayClick={false} size="full">
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
      />
      <ModalContent>
        <ModalHeader color="white">Collaboration</ModalHeader>
        <ModalCloseButton bg="#0F0" borderRadius="50%" />
        <ModalBody pb="2">
          <Spinner color="#0F0" position="fixed" top="50vh" left="50vw" transform="translate(-50%,-50%)" zIndex="-1" />
          <iframe title="collab" src="https://docs.google.com/forms/d/e/1FAIpQLScc3HjIt7VB0LK-IMGOWdTokFMVLPsG6etj0rJrj0YlCc73OQ/viewform?usp=sf_link" style={{
            border: "0",
            height: "calc(100vh - 120px)",
            width: "100%",
            borderRadius: "8px",
            zIndex: "10",
            // background: "radial-gradient(circle, rgba(0,128,0,1) 0%, rgba(0,88,0,1) 39%, rgba(0,18,0,1) 100%)"
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
          <Spinner color="#0F0" position="fixed" top="50vh" left="50vw" transform="translate(-50%,-50%)" zIndex="-1" />
          <iframe title="recruit" src="https://docs.google.com/forms/d/e/1FAIpQLScOq61gb-sET6_GV5QiaxjcecQhGlajB-qn7_C-n_j8fKebCQ/viewform?usp=sf_link" style={{
            border: "0",
            height: "calc(100vh - 120px)",
            width: "100%",
            borderRadius: "8px",
            zIndex: "10",
            // background: "radial-gradient(circle, rgba(0,128,0,1) 0%, rgba(0,88,0,1) 39%, rgba(0,18,0,1) 100%)"
          }} />
        </ModalBody>
      </ModalContent>
    </Modal>

    <TopBar home
      links={[
        {
          label: "Guide",
          to: "/guide"
        },
        {
          label: "Boutique",
          to: "https://hexofo.myspreadshop.fr/"
        },
        {
          label: "Blog",
          to: "https://hexofo.com/blog"
        },
      ]}
      scrolls={[
        {
          label: "Équipe",
          to: "team"
        },
        {
          label: "Fêtes",
          to: "upcoming"
        },
        {
          label: "À propos",
          to: "main"
        },
      ]}
    />
  </>
}

export default Home;