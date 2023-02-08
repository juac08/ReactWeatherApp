import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_THEME, SET_UNIT } from "../store/settings/settingsSlice";
import { RootState } from "../store/store";
import BrandTooltip from "./UI/Tooltip/BrandTooltip";

/**
 * React Functional Component.
 */
const Header: React.FC<HeaderOwnProps> = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useDispatch();

  const setTheme = () => {
    toggleColorMode();
    dispatch(SET_THEME(colorMode));
  };

  const setTempUnit = () => {
    settings.tempUnit === "C"
      ? dispatch(SET_UNIT("F"))
      : dispatch(SET_UNIT("C"));
  };

  const ariaLabelColorMode = useMemo(() => {
    return colorMode === "light"
      ? "Switch to Dark mode"
      : "Switch to Light mode";
  }, [colorMode]);

  const ariaLabelTempUnit = useMemo(() => {
    return settings.tempUnit === "C"
      ? "Switch to Fahrenheit"
      : "Switch to Celsius";
  }, [settings.tempUnit]);

  const themeIcon = useMemo(() => {
    return colorMode === "dark" ? <SunIcon /> : <MoonIcon />;
  }, [colorMode]);

  const tempUnitIcon = useMemo(() => {
    return settings.tempUnit === "C" ? "℃" : "℉";
  }, [settings.tempUnit]);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="purple.600"
      p="20px"
      position={"sticky"}
      top={0}
      zIndex={1}
    >
      <Text color="white">Weather App</Text>
      <Flex gap={2}>
        <BrandTooltip label={ariaLabelColorMode}>
          <Button
            aria-label={ariaLabelColorMode}
            onClick={setTheme}
            size="sm"
            colorScheme={"purple"}
          >
            {themeIcon}
          </Button>
        </BrandTooltip>
        <BrandTooltip label={ariaLabelTempUnit}>
          <Button
            aria-label={ariaLabelTempUnit}
            onClick={setTempUnit}
            size="sm"
            colorScheme={"purple"}
          >
            {tempUnitIcon}
          </Button>
        </BrandTooltip>
      </Flex>
    </Flex>
  );
};

/**
 * HeaderOwnProps interface description.
 */
interface HeaderOwnProps {}

export default Header;
