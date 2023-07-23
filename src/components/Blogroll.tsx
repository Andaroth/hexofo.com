import { FC, useState, useEffect } from "react";

import { Stack, AspectRatio, Flex, Text, Image } from "@chakra-ui/react";

interface wpArticle {
  title: string
  thumbnail: string
  alt?: string
  url: string
}

const Blogroll: FC = () => {
  const [wpArticles, setArticles]: [Array<any>, any] = useState([])
  const [wpMedias, setMedias]: [Array<any>, any] = useState([])
  const WP_API = "https://hexofo.com/blog/wp-json/wp/v2/"
  
  useEffect(() => {
    if (!wpArticles.length) {
      fetch(WP_API + "media?per_page=30").then((res) => res.json()).then(medias => {
        setMedias(medias)
        fetch(WP_API + "posts?categories=1,3,6").then((res) => res.json()).then(res => {
          const articles: Array<wpArticle> = []
          res.forEach((article: any) => {
            const matchMedia = wpMedias.find((media: any) => media.id === article.featured_media)
            const wpArticle:wpArticle = {
              title: article.title.rendered,
              thumbnail: matchMedia?.source_url || "https://hexofo.com/logo512.png",
              alt: matchMedia?.alt_text,
              url: article.link
            }
            articles.push(wpArticle)
          })
          setArticles(articles);
        })
      })
    }
  })

  return <Stack id="blog" bg="black" background="#070" py="4" style={{ marginTop: '0'}}>
    <Text as="h3" fontSize="xl" color="white" textAlign="center">Articles de notre blog</Text>
      <Flex mt="4" justifyContent="center">
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
            </Stack>) : <Text color="white" fontWeight="bold">Aucun article !</Text>}
          </Flex>
      </Flex>
    </Flex>
  </Stack>
}

export default Blogroll;