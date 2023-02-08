import React, { useState } from "react";
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
const DashboardForm: React.FC<DashboardFormOwnProps> = ({ onCityChange }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    if (!e.target.value) return;
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input) return;
    onCityChange(input);
    setInput("");
  };

  return (
    <Flex mt="20px">
      <FormControl isRequired maxW={"400px"}>
        <FormLabel cursor="pointer">City Name</FormLabel>
        <InputGroup size="md">
          <Input
            type="text"
            placeholder="Enter city name and press enter..."
            onChange={handleInputChange}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <InputRightElement>
            <Button
              variant={"outline"}
              colorScheme="purple"
              type="submit"
              onClick={handleSubmit}
            >
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
interface DashboardFormOwnProps {
  onCityChange: (cityName: string) => void;
}

export default DashboardForm;
