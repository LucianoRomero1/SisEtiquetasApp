import {
  Flex,
  useDisclosure,
  Stack,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronDownIcon,
  AddIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Home } from "../pages/private/Home";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  prependRoute,
  removeRoutes,
} from "../../features/breadcrumbs/breadcrumbSlice";
import { v4 as uuid } from "uuid";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [breadcrumb, setBreadcrumb] = useState({
    route: "",
    name: "",
  });
  const dispatch = useDispatch();

  const handlePrincipalBreadc = (e) => {
    if (e.target.name == "Home" || e.target.name == "Error") {
      return dispatch(removeRoutes());
    }

    let breadcrumb = {
      id: uuid(),
      route: e.target.ariaLabel,
      name: e.target.name,
      type: "Principal",
    };
    setBreadcrumb(breadcrumb);

    dispatch(prependRoute(breadcrumb));
  };

  return (
    <Flex
      py={3}
      px={10}
      direction={["column", "row"]}
      justify="space-between"
      className="bg-basso-red"
    >
      <Flex alignItems="center" wrap="wrap">
        <Flex flexGrow={1} justify="center">
          <Heading ml={[4, 0]}>
            <NavLink
              to="/"
              element={<Home />}
              name="Home"
              aria-label="/"
              onClick={handlePrincipalBreadc}
            >
              <img
                className="logoBasso"
                src="/img/bassosa.png"
                alt="Logo Basso"
              />
            </NavLink>
          </Heading>
        </Flex>
        <HamburgerIcon
          onClick={isOpen ? onClose : onOpen}
          display={["inline", "none"]}
        />
      </Flex>
      <Flex display={[isOpen ? "flex" : "none", "flex"]}>
        <Stack
          align="center"
          direction={["column", "row"]}
          spacing="10"
          mt={[isOpen ? "2" : ""]}
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="link"
              color="white"
            >
              Etiquetas
            </MenuButton>
            <MenuList>
              <NavLink to="/tag/create">
                <MenuItem
                  icon={<AddIcon mb={1} />}
                  name="Create"
                  aria-label="/tag/create"
                  onClick={handlePrincipalBreadc}
                >
                  Crear
                </MenuItem>
              </NavLink>
              <MenuDivider />
              <NavLink to="/tag/list">
                <MenuItem
                  icon={<ViewIcon mb={1} />}
                  name="List"
                  aria-label="/tag/list"
                  onClick={handlePrincipalBreadc}
                >
                  Detalle
                </MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="link"
              color="white"
            >
              Username
            </MenuButton>
            <MenuList>
              <NavLink to="/tag/logout">
                <MenuItem>Logout</MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Flex>
  );
};
