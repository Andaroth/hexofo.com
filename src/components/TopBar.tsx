import { FC, useState } from "react";

import { Link as Scroll } from "react-scroll";
import { FlexProps, Stack, Flex, Spacer, Text, Image } from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";

interface NavItem {
  label: string
  to: string
}

interface Props extends FlexProps {
  links?: Array<NavItem>
  scrolls?: Array<NavItem>
  home?: boolean
}

const TopBar: FC<Props> = (props) => {
  const navigate = useNavigate();
  const handleNavigate = (link:string) => {
    if (link.startsWith('https://')) window.open(link,'_blank')
    else {
      window.scrollTo(0, 0)
      navigate(link)
    }
  }

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
      <Stack cursor="pointer" onClick={() => handleNavigate('/')}>
        <Image cursor="pointer" src="./logo512.png" alt="logo" w="48px" h="48px" transition="all .5s ease" transform={ logoVisible || !props.home ? 'none' : 'translateY(-48px)'} />
      </Stack>
      <Spacer />
      <Stack justifyContent="center">
        { props.children }
      </Stack>
      <Spacer />
      { props.links?.map(link => <Stack cursor="pointer"  ml="4"_hover={{borderBottom: "2px solid #0F0", color: "#0F0"}} key={props.links?.indexOf(link)}>
        <Flex cursor="pointer" onClick={() => handleNavigate(link.to)}>
          <Text lineHeight="48px" textTransform="capitalize">{ link.label }</Text>
        </Flex>
      </Stack>)}
      { props.scrolls?.map(scroll => <Stack cursor="pointer" className="noMobile" ml="4"_hover={{borderBottom: "2px solid #0F0", color: "#0F0"}} key={props.scrolls?.indexOf(scroll)}>
        <Scroll to={ scroll.to } smooth={true}>
          <Text lineHeight="48px" textTransform="capitalize">{ scroll.label }</Text>
        </Scroll>
      </Stack>)}
    </Flex>
  </Flex>
}

export default TopBar;