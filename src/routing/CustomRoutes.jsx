import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../components/pages/private/Home";
import { Error } from "../components/pages/Error";
import { Footer } from "../components/layout/Footer";
import { Box } from "@chakra-ui/react";
import { List } from "../components/pages/private/tag/List";
import { Create } from "../components/pages/private/tag/Create";
import { Login } from "../components/pages/public/Login";
import { PublicLayout } from "../components/pages/public/PublicLayout";
import { PrivateLayout } from "../components/pages/private/PrivateLayout";
import { AuthProvider } from "../context/AuthProvider";
import { Nav } from "../components/layout/Nav";
import { Logout } from "../components/pages/private/Logout";

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Login />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>
            <Route path="/tag" element={<PrivateLayout />}>
              <Route index element={<Home />} />
              <Route path="" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="list" element={<List />} />
              <Route path="create" element={<Create />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};
