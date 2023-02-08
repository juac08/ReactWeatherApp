import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";

/**
 * React Functional Component.
 */
const DashBoardCard: React.FC<DashBoardCardOwnProps> = ({ city }) => {
  return (
    <Card
      variant="elevated"
      minW={"300px"}
      textAlign="center"
      borderTop="2px solid purple"
    >
      <CardHeader>
        <Heading size="md"> {city}</Heading>
      </CardHeader>
      <CardBody>
        <Heading>3 ℃</Heading>
      </CardBody>
    </Card>
  );
};

/**
 * DashBoardCardOwnProps interface description.
 */
interface DashBoardCardOwnProps {
  city: string;
}

export default DashBoardCard;
