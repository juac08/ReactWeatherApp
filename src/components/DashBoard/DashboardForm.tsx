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
  useToast,
} from "@chakra-ui/react";

/**
 * React Functional Component.
 */
const DashboardForm: React.FC<DashboardFormOwnProps> = ({ onCityChange }) => {
  const [input, setInput] = useState("");
  const Toast = useToast();

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input) {
      Toast({
        description: "Please enter a city name.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    onCityChange(input);
    setInput("");
  };

  return (
    <Flex mt="20px" p={["20px", "0", "0"]}>
      <FormControl isRequired maxW={"400px"}>
        <FormLabel cursor="pointer">City Name</FormLabel>
        <InputGroup size="md">
          <Input
            type="text"
            placeholder="Enter city name and press enter..."
            onChange={handleInputChange}
            variant="flushed"
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            _focusVisible={{
              borderColor: "purple.600",
            }}
          />
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <InputRightElement>
            <Button
              variant={"solid"}
              colorScheme="purple"
              type="submit"
              onClick={handleSubmit}
              mb="10px"
            >
              <ArrowForwardIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText>Hint: Oslo | Paris etc...</FormHelperText>
        <FormErrorMessage>{}</FormErrorMessage>
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
