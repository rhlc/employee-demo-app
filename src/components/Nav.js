import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Heading,
} from "@chakra-ui/react";
import { ReactComponent as InovatyvLogo } from "./../assets/static/inovatyv.svg";
import { Search2Icon } from "@chakra-ui/icons";

function Nav({ handleItChange, focusInput }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row", lg: "row" }}
    >
      <Box>
        <Flex alignItems={"baseline"}>
          <a href="https://rahulchoudhary.dev" target="_blank" rel="noreferrer">
            <InovatyvLogo />
          </a>

          <Heading
            as="h3"
            size="lg"
            fontSize={{ base: "12px", md: "20px", lg: "24px" }}
            fontWeight={"800"}
            color={"#94969E"}
            marginBottom={{ base: "15px" }}
          >
            &nbsp; CODING CHALLENGE
          </Heading>
        </Flex>
      </Box>

      <Box>
        <InputGroup width={{ base: "20rem", md: "18rem", lg: "40rem" }}>
          <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
          <Input
            type="text"
            placeholder="Try Searching Rhonda"
            onChange={(e) => {
              handleItChange(e);
            }}
            onFocus={() => {
              focusInput(true);
            }}
            onBlur={() => {
              focusInput(false);
            }}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
}

export default Nav;
