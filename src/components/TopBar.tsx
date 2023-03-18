import { FC, useState } from "react";

import { Link as Scroll } from "react-scroll";
import { FlexProps, Stack, Flex, Spacer, Text, Image } from '@chakra-ui/react';

const TopBar: FC<FlexProps> = (props) => {
  const [visible,setVisible] = useState(false);
  const [logoVisible,setLogoVisible] = useState(false);

  window.addEventListener('scroll', () => {
    setLogoVisible(window.scrollY > (window.innerHeight - 48))
    setVisible(window.scrollY > (window.innerHeight / 2))
  })

  return <Flex
    h="48px"
    bg={visible ? "blackAlpha.700" : 'transparent'}
    position="fixed"
    top="0"
    left="0"
    w="100vw"
    m="0"
    py="0"
    px="6"
    zIndex="128"

    transition="all .5s ease"

    justifyContent="center"

    color="white"
    fontWeight="#070"

    {...props}
  >
    <Flex w="100%">
      <Scroll to="top" smooth={true}>
        <Image cursor="pointer" src="./logo512.png" alt="logo" w="48px" h="48px" transition="all .5s ease" transform={ logoVisible ? 'none' : 'translateY(-48px)'} />
      </Scroll>
      <Spacer />
      <Stack cursor="pointer"  ml="4"_hover={{borderBottom: "2px solid #0F0", color: "#0F0"}}>
        <Scroll to="team" smooth={true}>
          <Text lineHeight="48px" textTransform="capitalize"><span className="noMobile">L'</span>équipe</Text>
        </Scroll>
      </Stack>
      <Stack cursor="pointer" ml="4" _hover={{borderBottom: "2px solid #0F0", color: "#0F0"}}>
        <Scroll to="upcoming" smooth={true}>
          <Text lineHeight="48px"><span className="noMobile">Nos&nbsp;</span>Fêtes</Text>
        </Scroll>
      </Stack>
      <Stack cursor="pointer" ml="4" _hover={{borderBottom: "2px solid #0F0", color: "#0F0"}}>
        <Scroll to="main" smooth={true}>
          <Text lineHeight="48px"><span className="noMobile">Nous&nbsp;</span>Rejoindre</Text>
        </Scroll>
      </Stack>
    </Flex>
  </Flex>
}

export default TopBar;