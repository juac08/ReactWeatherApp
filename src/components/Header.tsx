import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_THEME, SET_UNIT } from "../store/settings/settingsSlice";
import { RootState } from "../store/store";

/**
 * React Functional Component.
 */
const Header: React.FC<HeaderOwnProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  const setTheme = () => {
    settings.theme === "light"
      ? dispatch(SET_THEME("dark"))
      : dispatch(SET_THEME("light"));
  };

  const setTempUnit = () => {
    settings.tempUnit === "C"
      ? dispatch(SET_UNIT("F"))
      : dispatch(SET_UNIT("C"));
  };
  return (
    <Flex justifyContent="space-between" p="20px">
      <Text>Weather App</Text>
      <Flex gap={2}>
        <Text onClick={setTheme} textTransform="capitalize">
          {settings.theme}
        </Text>
        <Text onClick={setTempUnit}>{settings.tempUnit}</Text>
      </Flex>
    </Flex>
  );
};

/**
 * HeaderOwnProps interface description.
 */
interface HeaderOwnProps {}

export default Header;
