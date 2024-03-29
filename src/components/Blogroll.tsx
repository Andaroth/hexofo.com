import { FC, useState, useEffect } from "react";

import { Stack, AspectRatio, Flex, Text, Image } from "@chakra-ui/react";

import { state, fetchArticles } from "../AppState";

import { useSnapshot } from "valtio";

interface wpArticle {
  title: string
  thumbnail: string
  alt?: string
  url: string
}

const Blogroll: FC = () => {
  const { wpArticles } = useSnapshot(state)

  const [visible,setVisible]:[boolean,any] = useState(false)

  useEffect(() => {
    function getOffset(el:any) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }

    window.addEventListener('scroll', () => {
      const { scrollY, innerHeight } = window;
      const visibleStep = scrollY + innerHeight
      if (!visible) {
        const blog = document.getElementById('blog')
        if (blog) requestAnimationFrame(() => {
          const { top } = getOffset(blog)
          if (visibleStep >= top) {
            if (!wpArticles.length) fetchArticles()
            setVisible(true)
          }
        })
        else setVisible(false)
      } else window.removeEventListener('scroll', () => {})
    })
  }, [visible,setVisible,wpArticles])

  return <Stack id="blog" bg="black" background="#070" py="4" style={{ marginTop: '0'}}>
    { wpArticles.length ? <Text as="h3" fontSize="xl" mb="4" color="white" textAlign="center">Articles de notre blog</Text> : ''}
      <Flex justifyContent="center">
        <Flex maxW="100vw" overflowX="auto" justifyContent="left" pl={ wpArticles.length ? "48px" : "0"}>
          <Flex alignSelf="center">
            { wpArticles.length ? wpArticles.map((article: wpArticle) => <Stack key={wpArticles.indexOf(article)}
              cursor="pointer"
              onClick={() => window.open(article.url, '_blank')}
              w="200px !impo"
              mr="2"
            >
              <AspectRatio w="200px" ratio={1}>
                <Image src={ article.thumbnail } alt={ article.alt } w="200px" h="200px" borderRadius="xl" />    
              </AspectRatio>
              <Flex maxW="200px" overflow="hidden">
                <Text color="white" textOverflow="ellipsis">{ article.title }</Text>
              </Flex>
            </Stack>) : <Stack cursor="pointer" onClick={() => window.open('https://hexofo.com/blog', '_blank')} pb="2" mb="4">
              <AspectRatio w="200px" ratio={1}>
                <Image src="./AndaLixe_noob.png" alt="loading" w="200px" h="200px" borderRadius="xl" />    
              </AspectRatio>
              <Flex maxW="200px" overflow="hidden">
                <Text m="0 auto" textAlign="center"  color="white" fontWeight="bold">Visitez notre blog !</Text>
              </Flex>
            </Stack>}
          </Flex>
      </Flex>
    </Flex>
  </Stack>
}

export default Blogroll;