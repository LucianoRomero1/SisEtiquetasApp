import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Error } from "../components/pages/Error";
import { Footer } from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";
import { Box } from "@chakra-ui/react";
import { List } from "../components/pages/tag/List";
import { Create } from "../components/pages/tag/Create";

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      {/* {layout top} */}
      <Nav />

      {/* {Central content & Routes} */}
      <Box px={10} py={3}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tag/list" element={<List />} />
          <Route path="/tag/create" element={<Create />} />
        </Routes>
      </Box>

      {/* {layout bottom} */}
      <Footer />
    </BrowserRouter>
  );
};
