import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Employee(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profileData, setProfileData] = useState(null);
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  useEffect(() => {
    if (selectedProfileId) {
      fetch(
        `https://61ffc91d5e1c4100174f6f6b.mockapi.io/employee/${selectedProfileId}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((response) => setProfileData(response))
        .catch((error) => console.log("error", error));
    }
  }, [selectedProfileId]);

  const handleDownloadEvent = (e) => {
    console.log(props.data.id);
    setSelectedProfileId(props.id);
    fetch(
      `https://61ffc91d5e1c4100174f6f6b.mockapi.io/employee/${props.data.id}`,
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const url = window.URL.createObjectURL(
          new Blob([JSON.stringify(response)])
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${response.employee_name}.json`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Box maxW="sm" marginTop={"25px"} boxShadow="xl" p="0 " rounded="xl">
      <Box background={"#F3F6FA"} borderRadius={"20px 20px 0px 0px"}>
        <Center>
          <Image
            borderRadius={"100%"}
            src={
              props?.data?.profile_image
                ? props.data.profile_image
                : "https://robohash.org/886a347549ad3704f5718183ba7ffa6a?set=set2&bgset=bg2&size=200x200"
            }
            alt={props.data.employee_name}
            height={"91px"}
            position={"relative"}
            top={"25px"}
          />
        </Center>
      </Box>
      <Box>
        <Grid
          h="125px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          marginTop={"20px"}
          padding={"25px"}
        >
          <GridItem colSpan={2}>
            <Text fontWeight={"semibold"} fontSize={"13px"}>
              Name
            </Text>
            <Text fontSize={"12px"}>{props.data.employee_name}</Text>

            <Text fontWeight={"semibold"} fontSize={"13px"}>
              Age
            </Text>
            <Text fontSize={"12px"}>{props.data.employee_age}</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontWeight={"semibold"} fontSize={"13px"}>
              Salary Range
            </Text>
            <Text fontSize={"12px"}>{props.data.employee_salary}</Text>
          </GridItem>
        </Grid>
      </Box>
      <Divider />
      <Box>
        <Flex
          justifyContent={"space-around"}
          marginTop={"32px"}
          padding={"15px"}
        >
          <Button
            variant="outline"
            fontSize={"10px"}
            color={"#F6B87B"}
            fontWeight={"400"}
            borderColor={"#F6B87B"}
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              onOpen();
              setSelectedProfileId(props.data.id);
            }}
          >
            View profile
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{props.data.employee_name}'s profile</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex>
                  <Box boxSize="sm" letterSpacing="wide">
                    <Image
                      src={
                        profileData?.profile_image
                          ? profileData?.profile_image
                          : "https://robohash.org/886a347549ad3704f5718183ba7ffa6a?set=set2&bgset=bg2&size=200x200"
                      }
                      alt={profileData?.employee_name}
                    />
                    <Text fontWeight={"semibold"} fontSize={"13px"}>
                      Name: {profileData?.employee_name}
                    </Text>
                    <Text fontWeight={"semibold"} fontSize={"13px"}>
                      Salary: {profileData?.employee_salary}
                    </Text>
                    <Text fontWeight={"semibold"} fontSize={"13px"}>
                      Age: {profileData?.employee_age}
                    </Text>
                  </Box>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Button
            variant="solid"
            fontSize={"10px"}
            fontWeight={"400"}
            colorScheme="blue"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              setSelectedProfileId(props.data.id);
              handleDownloadEvent(e);
            }}
          >
            Download Profile
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Employee;
