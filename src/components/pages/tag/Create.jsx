import React, { useState } from "react";
import { Header } from "../../layout/Header";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  StackDivider,
  Box,
  Divider,
  Select,
  Grid,
  GridItem,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { Global } from "../../../helpers/Global";

export const Create = () => {
  const [clients, setClients] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getClientsAndArticles();
  }, []);

  const getClientsAndArticles = async () => {
    const request = await fetch(Global.url + "tag/getClientsAndArticles", {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();
    //TODO: NO funciona, buscar un video como usar Symfony Y React
    console.log(data);
  };

  return (
    <div>
      <Header />
      <form className="register-form">
        <Card variant="outline" mt="3">
          <CardHeader>
            <Heading size="sm">
              Ingreso de datos <AttachmentIcon boxSize="3" ml="1" mb="1" />
            </Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Fecha
                      </FormLabel>
                      <Input type="date" isDisabled />
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel fontSize={14} fontWeight="normal">
                        N° Registro
                      </FormLabel>
                      <Input type="number" isDisabled />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid mt={4} templateColumns="repeat(3, 1fr)" gap={5}>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Cliente
                      </FormLabel>
                      <Select placeholder="Seleccione una opción">
                        <option>Option Example</option>
                        <option>Option Example</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Válvula 3B
                      </FormLabel>
                      <Select placeholder="Seleccione una opción">
                        <option>Option Example</option>
                        <option>Option Example</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Tipo
                      </FormLabel>
                      <Input type="number" value="1" w="30%" isDisabled />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid mt={4} templateColumns="repeat(3, 1fr)" gap={5}>
                  <GridItem w="100%">
                    <FormControl>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Aplicación
                      </FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Ean 13 Code
                      </FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Cantidad x estuche
                      </FormLabel>
                      <Input type="number" min="1" max="9999" w="30%" />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid mt={4} templateColumns="repeat(3, 1fr)" gap={5}>
                  <GridItem w="100%">
                    <FormControl>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Descripción
                      </FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl>
                      <FormLabel fontSize={14} fontWeight="normal">
                        Descripción original cliente
                      </FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </GridItem>
                </Grid>
              </Box>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button type="submit" variant="solid" colorScheme="blue">
                Cargar datos
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Volver
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </form>
      <br />
    </div>
  );
};
