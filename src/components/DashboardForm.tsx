import React from "react";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

/**
 * React Functional Component.
 */
const DashboardForm: React.FC<DashboardFormOwnProps> = () => {
  return (
    <Flex mt="20px">
      <FormControl isRequired maxW={"400px"}>
        <FormLabel cursor="pointer">City Name</FormLabel>
        <InputGroup size="md">
          <Input type="text" placeholder="Enter city name and press enter..." />
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <InputRightElement>
            <Button variant={"outline"} colorScheme="purple">
              <ArrowForwardIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText>City name should be text.</FormHelperText>
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
    </Flex>
  );
};

/**
 * DashboardFormOwnProps interface description.
 */
interface DashboardFormOwnProps {}

export default DashboardForm;
