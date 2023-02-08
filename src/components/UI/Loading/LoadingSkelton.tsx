import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

/**
 * React Functional Component.
 */
const LoadingSkelton: React.FC<LoadingSkeltonOwnProps> = ({ loading }) => {
  return (
    <Box
      padding="6"
      boxShadow="lg"
      minW={"300px"}
      borderTop="1px solid purple"
      borderRadius={"md"}
    >
      <Skeleton isLoaded={loading} fadeDuration={1}>
        <CircularProgress
          isIndeterminate
          color="purple.400"
          role="progressbar"
          size="100px"
          thickness={"4px"}
        >
          <CircularProgressLabel fontSize={"sm"}>
            Getting Location
          </CircularProgressLabel>
        </CircularProgress>
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="1" />
      </Skeleton>
    </Box>
  );
};

/**
 * LoadingSkeltonOwnProps interface description.
 */
interface LoadingSkeltonOwnProps {
  loading: boolean;
}

export default LoadingSkelton;
