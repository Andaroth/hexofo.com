import { FC } from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';

import "./styles/index.scss";

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";


const App: FC = () => {
  return (
    <HashRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ChakraProvider>
    </HashRouter>
  );
}

export default App;
