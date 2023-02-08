import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { convertTimestamp } from "../../helpers/math.helpers";
import { WeatherData } from "../../types/weather.types";

/**
 * React Functional Component.
 */
const Description: React.FC<DescriptionOwnProps> = ({ data }) => {
  const visability = useMemo(() => {
    if (!data?.visibility) return;
    return data.visibility / 1000;
  }, [data]);

  const sunrise = useMemo(() => {
    if (!data?.sys.sunrise) return;
    return convertTimestamp(data?.sys.sunrise, data?.timezone);
  }, [data]);

  const sunset = useMemo(() => {
    if (!data?.sys.sunset) return undefined;
    return convertTimestamp(data?.sys.sunset, data?.timezone);
  }, [data]);
  return (
    <Grid {...gridStyles} position="relative" textAlign="center">
      <Box {...boxStyles} position="absolute"></Box>
      <Box {...borderStyles}>
        Sun Rise<Text fontSize={"sm"}>{sunrise}</Text>
      </Box>
      <Box {...borderStyles}>
        Sun Set<Text fontSize={"sm"}>{sunset}</Text>
      </Box>
      <Box p="8">
        Humidity
        <Text fontSize={"sm"}>{data?.main.humidity}%</Text>
      </Box>
      <Box p="8">
        Visability
        <Text fontSize={"sm"}>{visability} km</Text>
      </Box>
    </Grid>
  );
};

/**
 * DescriptionOwnProps interface description.
 */
interface DescriptionOwnProps {
  data: WeatherData;
}

export default Description;

/**
 * Styles for Description component.
 */

const gridStyles = {
  templateColumns: "1fr 1fr",
  alignItems: "center",
};

const boxStyles = {
  position: "absolute",
  w: ".4px",
  height: "100%",
  bg: "purple.600",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const borderStyles = {
  borderBottom: "1px solid",
  borderColor: "purple.600",
  p: "8",
};
