import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import React from "react";

/**
 * React Functional Component.
 */
const DashBoardCard: React.FC<DashBoardCardOwnProps> = ({ city }) => {
  return (
    <Card
      variant="elevated"
      minW={"300px"}
      align="center"
      borderTop="1px solid purple"
    >
      <CardHeader>
        <Heading size="md"> {city}</Heading>
      </CardHeader>
      <CardBody>
        <Heading>3 ℃</Heading>
      </CardBody>
      <CardFooter>
        <Button colorScheme="purple" variant="outline">
          View Details <ArrowForwardIcon ml="10px" />
        </Button>
      </CardFooter>
    </Card>
  );
};

/**
 * DashBoardCardOwnProps interface description.
 */
interface DashBoardCardOwnProps {
  city: string;
}

export default React.memo(DashBoardCard);
