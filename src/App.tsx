import { FC, useEffect } from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';

import "./styles/index.scss";

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Guide from './pages/Guide';

const App: FC = () => {
  useEffect(() => {
    if (window.location.href.includes('/shop')) window.location.href = 'https://hexofo.myspreadshop.be/'
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
