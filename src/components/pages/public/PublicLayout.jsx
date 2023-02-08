import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Header } from "../../layout/Header";

export const PublicLayout = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <Box px={10} py={3}>
        {Object.keys(auth).length === 0 ? <Outlet /> : <Navigate to="tag/" />}
        {/* {!auth ? <Outlet /> : <Navigate to="/tag" />} */}
      </Box>
    </>
  );
};
