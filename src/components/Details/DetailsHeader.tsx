import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BrandTooltip from "../UI/Tooltip/BrandTooltip";

/**
 * React Functional Component.
 */
const DetailsHeader: React.FC<DetailsHeaderOwnProps> = ({ cityName }) => {
  const navigate = useNavigate();

  return (
    <Flex
      justifyContent="space-between"
      mt="20px"
      p={["20px", "0", "0"]}
      alignItems="center"
    >
      <BrandTooltip label="Back to dashboard.">
        <Button
          onClick={() => navigate("/dashboard")}
          colorScheme="purple"
          leftIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </BrandTooltip>
      <Heading size="md">{cityName}</Heading>
    </Flex>
  );
};

/**
 * DetailsHeaderOwnProps interface description.
 */
interface DetailsHeaderOwnProps {
  cityName: string;
}

export default DetailsHeader;
