import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box role="contentinfo" bg="#000" color="white" className="fixed-bottom">
        <Stack spacing={{ base: "4", md: "5" }} align="center">
          <Text fontSize="xs" fontWeight="bold">
            BASSO S.A &copy; {new Date().getFullYear()} Copyright © - Todos los
            derechos reservados
          </Text>
        </Stack>
      </Box>
    </>
  );
};
