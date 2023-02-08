//@ts-nocheck
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
import { useFetchData } from "../helpers/hooks/useGetData";
import { RootState } from "../store/store";
import LoadingSkelton from "./UI/Loading/LoadingSkelton";

/**
 * React Functional Component.
 */
const DashBoardCard: React.FC<DashBoardCardOwnProps> = ({ city }) => {
  const unit = useSelector((state: RootState) => state.settings.tempUnit);
  const { data, loading, error } = useFetchData(city);
  console.log(data);

  const getTemp = useMemo(() => {
    return unit === "C" ? "3 ℃" : "37 ℉";
  }, [unit]);

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
            <Heading size="md"> {data?.name}</Heading>
          </CardHeader>
          <CardBody>
            <Heading>{getTemp}</Heading>
          </CardBody>
          <CardFooter>
            <Button colorScheme="purple" variant="outline">
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
