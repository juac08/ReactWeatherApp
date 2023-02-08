import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

/**
 * React Functional Component.
 */
const Header: React.FC<HeaderOwnProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);
  return (
    <Flex justifyContent="space-between" p="20px">
      <Text>Weather App</Text>
      <Flex gap={2}>
        <Text>{settings.theme}</Text>
        <Text>{settings.tempUnit}</Text>
      </Flex>
    </Flex>
  );
};

/**
 * HeaderOwnProps interface description.
 */
interface HeaderOwnProps {}

export default Header;
