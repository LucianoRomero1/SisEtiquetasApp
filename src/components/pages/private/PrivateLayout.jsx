import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Header } from "../../layout/Header";
import { Nav } from "../../layout/Nav";

export const PrivateLayout = () => {
  const { auth, loading } = useAuth();
  if (loading) {
    <h1>Cargando...</h1>;
  } else {
    return (
      <>
        <Nav />
        <Box px={10} py={3}>
          <Header />
          {Object.keys(auth).length !== 0 ? <Outlet /> : <Navigate to="tag/" />}
          {/* {auth ? <Outlet /> : <Navigate to="/login" />} */}
        </Box>
      </>
    );
  }
};
