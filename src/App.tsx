import { FC, useEffect } from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';

import "./styles/index.scss";

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Guide from './pages/Guide';

import { SET_ARTICLES, SET_MEDIAS, SET_USERS, state } from './AppState';
import { useSnapshot } from 'valtio';


const App: FC = () => {
  useEffect(() => {
    if (window.location.href.includes('/shop')) window.location.href = 'https://hexofo.myspreadshop.be/'
  })
  
  const decodeHtmlCharCodes = (str: string) => str.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode));
  
  const { wpArticles, wpMedias, wpUsers } = useSnapshot(state)
  const WP_API = "https://hexofo.com/blog/wp-json/wp/v2/"
  
  useEffect(() => {
    if (!wpArticles.length) {
      fetch(WP_API + "media?per_page=30").then((res) => res.json()).then(medias => {
        SET_MEDIAS(medias)
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
              name: decodeHtmlCharCodes(article.title.rendered),
              date: `${day} ${month} à ${hours}h${minutes}`,
              img: matchMedia?.source_url || "./logo512.png",
              // content: article.alt_text,
              link: article.link
            }
            articles.push(wpArticle)
          })
          SET_ARTICLES(articles);
        })
      })
    }
  })
  useEffect(() => {
    if (!wpUsers.length) {
      fetch(WP_API + "users?per_page=20").then((res) => res.json()).then(users => {
        SET_USERS(users)
      })
    }
  })

  return (
    <HashRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/aide" element={<Guide />} />
          <Route path="/help" element={<Guide />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ChakraProvider>
    </HashRouter>
  );
}

export default App;
