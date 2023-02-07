import {
  Box,
  Center,
  FormControl,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Global } from "../../../helpers/Global";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";

export const Login = () => {
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState("not_sended");
  const { form, changed } = useForm({});
  const { setAuth } = useAuth();
  const handleClick = () => setShow(!show);

  const loginUser = async (e) => {
    e.preventDefault();

    let userToLogin = form;

    const request = await fetch(Global.url + "login_check", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = await request.json();
    if (data.status == "success") {
      localStorage.setItem("user", JSON.stringify(data.user));
      setSaved("logged");
      setAuth(data.user);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      setSaved("error");
    }
  };

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
        <form onSubmit={loginUser}>
          <Center mt="4">
            <FormControl w="20%">
              <Input
                type="text"
                placeholder="Usuario"
                name="_username"
                onChange={changed}
              />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="_password"
                  onChange={changed}
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
        <Center mt={3}>
          {saved == "logged" ? (
            <Alert status="success" w="25%" fontWeight="bold">
              <AlertIcon />
              Correcto!
            </Alert>
          ) : (
            ""
          )}
          {saved == "error" ? (
            <Alert status="error" w="25%" fontWeight="bold">
              <AlertIcon />
              Credenciales inválidas
            </Alert>
          ) : (
            ""
          )}
        </Center>
      </Box>
    </>
  );
};
