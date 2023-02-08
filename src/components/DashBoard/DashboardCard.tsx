import { ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../helpers/hooks/useGetData";
import { RootState } from "../../store/store";
import LoadingSkelton from "../UI/Loading/LoadingSkelton";
import BrandTooltip from "../UI/Tooltip/BrandTooltip";

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
    <Box>
      {loading && <LoadingSkelton loading={loading} />}
      {error && !data && (
        <Text>
          {error}
          <Button {...buttonStyle} onClick={() => window.location.reload()}>
            <RepeatIcon />
          </Button>
        </Text>
      )}
      {data && (
        <Card {...cardStyle}>
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
            <BrandTooltip label="Click for details.">
              <Button
                colorScheme="purple"
                variant="outline"
                onClick={handleClick}
                rightIcon={<ArrowForwardIcon />}
              >
                View Details
              </Button>
            </BrandTooltip>
          </CardFooter>
        </Card>
      )}
    </Box>
  );
};

/**
 * DashBoardCardOwnProps interface description.
 */
interface DashBoardCardOwnProps {
  city: string;
}

export default React.memo(DashBoardCard);

const buttonStyle = {
  colorScheme: "purple",
  variant: "outline",
  ml: "10px",
  size: "sm",
};

const cardStyle = {
  variant: "elevated",
  minW: "300px",
  align: "center",
  borderTop: "1px solid",
  borderColor: "purple.600",
};
