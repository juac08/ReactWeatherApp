import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
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

  const ariaLabelColorMode = useMemo(() => {
    return settings.theme === "light"
      ? "Switch to Dark mode"
      : "Switch to Light mode";
  }, [settings.theme]);

  const ariaLabelTempUnit = useMemo(() => {
    return settings.tempUnit === "C"
      ? "Switch to Fahrenheit"
      : "Switch to Celsius";
  }, [settings.tempUnit]);

  const themeIcon = useMemo(() => {
    return settings.theme === "light" ? <SunIcon /> : <MoonIcon />;
  }, [settings.theme]);

  const tempUnitIcon = useMemo(() => {
    return settings.tempUnit === "C" ? "℃" : "℉";
  }, [settings.tempUnit]);

  return (
    <Flex justifyContent="space-between" p="20px">
      <Text>Weather App</Text>
      <Flex gap={2}>
        <Button aria-label={ariaLabelColorMode} onClick={setTheme} size="sm">
          {themeIcon}
        </Button>
        <Button aria-label={ariaLabelTempUnit} onClick={setTempUnit} size="sm">
          {tempUnitIcon}
        </Button>
      </Flex>
    </Flex>
  );
};

/**
 * HeaderOwnProps interface description.
 */
interface HeaderOwnProps {}

export default Header;
