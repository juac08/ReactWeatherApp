import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../helpers/hooks/useGetData";
import { RootState } from "../store/store";

/**
 * React Functional Component.
 */
const Details: React.FC<DetailsOwnProps> = () => {
  const { city } = useParams();
  const { data } = useFetchData(city || "");
  const navigate = useNavigate();
  const unit = useSelector((state: RootState) => state.settings.tempUnit);

  const getTemp = (temp: number) => {
    if (unit === "C") return temp;
    return (temp * 9) / 5 + 32;
  };

  const temp = useMemo(() => {
    if (!data?.main.temp) return 0;
    return getTemp(data?.main.temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, unit]);

  const getHigh = useMemo(() => {
    if (!data?.main.temp_max) return 0;
    return getTemp(data?.main.temp_max);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, unit]);

  const getLow = useMemo(() => {
    if (!data?.main.temp_min) return 0;
    return getTemp(data?.main.temp_min);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, unit]);

  const getUnit = useMemo(() => {
    return unit === "C" ? " °C" : " °F";
  }, [unit]);

  const visability = useMemo(() => {
    if (!data?.visibility) return 0;
    return data.visibility / 1000;
  }, [data]);

  function convertTimestamp(timestamp: number, offset: number) {
    let date = new Date((timestamp + offset) * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  }

  const sunrise = useMemo(() => {
    if (!data?.sys.sunrise) return undefined;
    return convertTimestamp(data?.sys.sunrise, data?.timezone);
  }, [data]);

  const sunset = useMemo(() => {
    if (!data?.sys.sunset) return undefined;
    return convertTimestamp(data?.sys.sunset, data?.timezone);
  }, [data]);

  return (
    <>
      {data ? (
        <>
          <Flex justifyContent="space-between" mt="20px">
            <Button onClick={() => navigate("/dashboard")} colorScheme="purple">
              Back
            </Button>
            <Heading size="md">{data.name}</Heading>
          </Flex>
          <Flex
            justifyContent={["center", "space-between", "space-around"]}
            flexWrap="wrap"
            alignItems="center"
            m="auto"
            height="60vh"
            gap="1rem"
          >
            <Flex
              justifyContent="center"
              flexDir="column"
              alignItems="center"
              gap="3"
            >
              <Text>{data?.weather[0].description}</Text>
              <Heading>
                {Math.round(temp)}
                <small>{getUnit}</small>
              </Heading>
              <Flex gap="4">
                <Heading size="sm">
                  H: {Math.round(getHigh)}
                  <small>{getUnit}</small>
                </Heading>
                <Heading size="sm">
                  L: {Math.round(getLow)}
                  <small>{getUnit}</small>
                </Heading>
              </Flex>
            </Flex>
            <Grid
              templateColumns="1fr 1fr"
              alignItems="center"
              position="relative"
            >
              <Box
                position="absolute"
                w="2px"
                height="100%"
                bg="purple"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              ></Box>
              <Box borderBottom="2px solid purple" p="8">
                Sun Rise:{sunrise}
              </Box>
              <Box borderBottom="2px solid purple" p="8">
                Sun Set:{sunset}
              </Box>
              <Box p="8">Humidity:{data?.main.humidity} %</Box>
              <Box p="8">Visability:{visability} km</Box>
            </Grid>
          </Flex>
        </>
      ) : (
        <div>Loading....</div>
      )}
      {!data && (
        <Button onClick={() => navigate("/dashboard")} colorScheme="purple">
          Back
        </Button>
      )}
    </>
  );
};

/**
 * DetailsOwnProps interface description.
 */
interface DetailsOwnProps {}

export default Details;
