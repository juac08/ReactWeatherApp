import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";
import BrandTooltip from "../Tooltip/BrandTooltip";

/**
 * React Functional Component.
 */
const LoadingSkelton: React.FC<LoadingSkeltonOwnProps> = ({ loading }) => {
  return (
    <BrandTooltip label="We are looking for your location. Make sure your location is enabled.">
      <Box
        padding="6"
        boxShadow="lg"
        minW={"300px"}
        borderTop="1px solid "
        borderColor="purple"
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
    </BrandTooltip>
  );
};

/**
 * LoadingSkeltonOwnProps interface description.
 */
interface LoadingSkeltonOwnProps {
  loading: boolean;
}

export default LoadingSkelton;
