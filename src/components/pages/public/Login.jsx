import {
  Box,
  Center,
  FormControl,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box display="block">
        <Center mt={100}>
          <img
            src="/img/favicon.png"
            alt="Logo Basso"
            width="310"
            height="180"
          />
        </Center>
        <Text align="center" fontSize="2xl">
          Iniciar Sesión
        </Text>
        <form>
          <Center mt="4">
            <FormControl w="20%">
              <Input placeholder="Usuario" />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Ocultar" : "Mostrar"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button
                w="100%"
                mt="2"
                type="submit"
                bg="blue.400"
                textColor="white"
                variant="solid"
                colorScheme="blue"
              >
                Ingresar
              </Button>
            </FormControl>
          </Center>
        </form>
      </Box>
    </>
  );
};
