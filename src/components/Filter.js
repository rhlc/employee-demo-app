import { Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon, RepeatIcon, AddIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function Filter({ salaryRange, ageRange, reset }) {
  return (
    <>
      <Box
        padding={"14px"}
        border={"0.901745px solid rgba(209, 210, 217, 0.3)"}
        marginTop={"25px"}
        marginBottom={"25px"}
      >
        <HStack spacing="10px">
          <Text fontSize="sm" color={"#94969E"}>
            Salary Range
          </Text>
          <Box>
            <Menu>
              <>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  fontSize="14px"
                  fontWeight="regular"
                  background={"none"}
                >
                  All
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 1, end: 100000 });
                    }}
                  >
                    1 to 100000
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 100000, end: 200000 });
                    }}
                  >
                    100000 to 200000
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 200000, end: 300000 });
                    }}
                  >
                    200000 to 300000
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 300000, end: 400000 });
                    }}
                  >
                    300000 to 400000
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      salaryRange({ start: 400000, end: 20000000 });
                    }}
                  >
                    400000 and beyond
                  </MenuItem>
                </MenuList>
              </>
            </Menu>
          </Box>
          <Text fontSize="sm" color={"#94969E"}>
            Age
          </Text>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                fontSize="14px"
                fontWeight="regular"
                background={"none"}
              >
                All
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 1, end: 20 });
                  }}
                >
                  0 to 20
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 20, end: 25 });
                  }}
                >
                  20 to 25
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 25, end: 30 });
                  }}
                >
                  25 to 30
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 30, end: 35 });
                  }}
                >
                  30 to 35
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    ageRange({ start: 35, end: 100 });
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
            }}
          >
            Reset
          </Button>
          <Button
            variant="ghost"
            leftIcon={<AddIcon />}
            border={"1.35262px dashed #D1D2D9"}
            fontSize="14px"
            fontWeight="regular"
          >
            More Filters
          </Button>
        </HStack>
      </Box>
    </>
  );
}

export default Filter;
