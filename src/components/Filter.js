import { useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, RepeatIcon } from "@chakra-ui/icons";

function Filter({ salaryRange, ageRange, reset }) {
  const [selectedSalRange, setSelectedSalRange] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  return (
    <>
      <Box
        padding={{ base: "0px", md: "8px", lg: "14px" }}
        border={"0.901745px solid rgba(209, 210, 217, 0.3)"}
        marginTop={"25px"}
        marginBottom={"25px"}
      >
        <HStack spacing="10px">
          <Text fontSize="sm" color={"#94969E"}>
            Salary Range
          </Text>
          <Box>
            <Menu
              onClose={() => {
                setSelectedAgeRange(null);
              }}
            >
              <>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  fontSize="14px"
                  fontWeight="regular"
                  background={"none"}
                >
                  {selectedSalRange ? selectedSalRange : "All"}
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      salaryRange({ start: 1, end: 200 });
                      setSelectedSalRange("1 to 200");
                    }}
                  >
                    1 to 200
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 200, end: 400 });
                      setSelectedSalRange("200 to 400");
                    }}
                  >
                    200 to 400
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 400, end: 600 });
                      setSelectedSalRange("400 to 600");
                    }}
                  >
                    400 to 600
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 600, end: 800 });
                      setSelectedSalRange("600 to 800");
                    }}
                  >
                    600 to 800
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 800, end: 10000000 });
                      setSelectedSalRange("800 and more");
                    }}
                  >
                    800 and more
                  </MenuItem>
                </MenuList>
              </>
            </Menu>
          </Box>
          <Text fontSize="sm" color={"#94969E"}>
            Age
          </Text>
          <Box>
            <Menu
              onClose={() => {
                setSelectedSalRange(null);
              }}
            >
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                fontSize="14px"
                fontWeight="regular"
                background={"none"}
              >
                {selectedAgeRange ? selectedAgeRange : "All"}
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 1, end: 18 });
                    setSelectedAgeRange("0 to 18");
                  }}
                >
                  0 to 18
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 18, end: 25 });
                    setSelectedAgeRange("18 to 25");
                  }}
                >
                  18 to 25
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 25, end: 30 });
                    setSelectedAgeRange("25 to 30");
                  }}
                >
                  25 to 30
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 30, end: 35 });
                    setSelectedAgeRange("30 to 35");
                  }}
                >
                  30 to 35
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 35, end: 100 });
                    setSelectedAgeRange("35 and beyond");
                  }}
                >
                  35 and beyond
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Button
            variant="ghost"
            leftIcon={<RepeatIcon />}
            border={"1.35262px dashed #D1D2D9"}
            fontSize="14px"
            fontWeight="regular"
            onClick={(e) => {
              reset(true);
              setSelectedAgeRange(null);
              setSelectedSalRange(null);
            }}
          >
            Reset
          </Button>
        </HStack>
      </Box>
    </>
  );
}

export default Filter;
