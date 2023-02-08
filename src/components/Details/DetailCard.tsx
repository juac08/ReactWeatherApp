import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getTemp } from "../../helpers/math.helpers";
import { RootState } from "../../store/store";
import { WeatherData } from "../../types/weather.types";

/**
 * React Functional Component.
 */
const DetailCard: React.FC<DetailCardOwnProps> = ({ data }) => {
  const unit = useSelector((state: RootState) => state.settings.tempUnit);

  const temp = useMemo(() => {
    if (!data?.main.temp) return;
    return getTemp(data?.main.temp, unit);
  }, [data, unit]);

  const getHigh = useMemo(() => {
    if (!data?.main.temp_max) return;
    return getTemp(data?.main.temp, unit);
  }, [data, unit]);

  const getLow = useMemo(() => {
    if (!data?.main.temp_min) return;
    return getTemp(data?.main.temp, unit);
  }, [data, unit]);

  const getUnit = useMemo(() => {
    return unit === "C" ? " °C" : " °F";
  }, [unit]);

  return (
    <Flex {...containerStyles} flexDir="column">
      <Text textTransform="capitalize">{data?.weather[0].description}</Text>
      <Heading>
        {temp}
        <Text {...textStyles}>{getUnit}</Text>
      </Heading>
      <Flex gap="4">
        <Heading size="xs">
          H: {getHigh}
          <Text {...textStyles}>{getUnit}</Text>
        </Heading>
        <Heading size="xs">
          L: {getLow}
          <Text {...textStyles}>{getUnit}</Text>
        </Heading>
      </Flex>
    </Flex>
  );
};

/**
 * DetailCardOwnProps interface description.
 */
interface DetailCardOwnProps {
  data: WeatherData;
}

export default DetailCard;

/**
 * Styles for the component.
 */
const containerStyles = {
  justifyContent: "center",
  flexDir: "column",
  alignItems: "center",
  gap: "3",
  boxShadow: "lg",
  p: "20px",
  borderTop: "1px solid",
  borderColor: "purple.600",
  borderRadius: "md",
  minW: "300px",
};

const textStyles = {
  fontSize: "sm",
  display: "inline-block",
  ml: "5px",
};
