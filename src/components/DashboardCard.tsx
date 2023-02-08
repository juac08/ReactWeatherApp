import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../helpers/hooks/useGetData";
import { RootState } from "../store/store";
import LoadingSkelton from "./UI/Loading/LoadingSkelton";

/**
 * React Functional Component.
 */
const DashBoardCard: React.FC<DashBoardCardOwnProps> = ({ city }) => {
  const unit = useSelector((state: RootState) => state.settings.tempUnit);
  const navigate = useNavigate();
  const { data, loading, error } = useFetchData(city);

  const getTemp = useMemo(() => {
    if (!data?.main.temp) return 0;
    return unit === "C" ? data?.main.temp : (data?.main.temp * 9) / 5 + 32;
  }, [data?.main.temp, unit]);

  const handleClick = () => {
    navigate(`/dashboard/${city}`);
  };

  return (
    <>
      {loading && <LoadingSkelton loading={loading} />}
      {error && <p>Error</p>}
      {data && (
        <Card
          variant="elevated"
          minW={"300px"}
          align="center"
          borderTop="1px solid purple"
        >
          <CardHeader>
            <Heading size="md"> {data.name}</Heading>
          </CardHeader>
          <CardBody>
            <Heading>
              {Math.round(getTemp)}
              <small>{unit === "C" ? " °C" : " °F"}</small>
            </Heading>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              variant="outline"
              onClick={handleClick}
            >
              View Details <ArrowForwardIcon ml="10px" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

/**
 * DashBoardCardOwnProps interface description.
 */
interface DashBoardCardOwnProps {
  city: string;
}

export default React.memo(DashBoardCard);
