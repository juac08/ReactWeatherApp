import { InfoIcon } from "@chakra-ui/icons";
import { Stack, Tooltip, Text, PlacementWithLogical } from "@chakra-ui/react";
import React from "react";

/**
 * React Functional Component.
 */
const BrandTooltip: React.FC<BrandTooltipOwnProps> = ({
  label,
  children,
  placement,
  isDisabled = false,
}) => {
  return (
    <Tooltip
      isDisabled={isDisabled}
      label={
        <Stack direction={"row"} alignItems="center" p="8px">
          <InfoIcon />
          <Text fontSize="14px">{label}</Text>
        </Stack>
      }
      placement={placement ? placement : "top"}
      borderRadius="md"
      hasArrow
      boxShadow={"lg"}
      _before={{
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        borderRadius: "md",
      }}
    >
      {children}
    </Tooltip>
  );
};

/**
 * BrandTooltipOwnProps interface description.
 */
interface BrandTooltipOwnProps {
  label: string;
  children?: React.ReactNode;
  placement?: PlacementWithLogical;
  isDisabled?: boolean;
}

export default BrandTooltip;
