import { Flex } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ReactComponent as InovatyvLogo } from "./../assets/static/inovatyv.svg";
import { Search2Icon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function Nav({ handleItChange }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row", lg: "row" }}
    >
      <Box>
        <Flex alignItems={"baseline"}>
          <a href="https://inovatyv.com" target="_blank" rel="noreferrer">
            <InovatyvLogo />
          </a>

          <Heading
            as="h3"
            size="lg"
            fontSize={{ base: "12px", md: "20px", lg: "24px" }}
            fontWeight={"800"}
            color={"#94969E"}
          >
            &nbsp; CODING CHALLENGE
          </Heading>
        </Flex>
      </Box>

      <Box>
        <InputGroup width={{ base: "20rem", md: "18rem", lg: "40rem" }}>
          <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
          <Input
            type="tel"
            placeholder="Try Searching John"
            onChange={(e) => {
              handleItChange(e);
            }}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
}

export default Nav;
