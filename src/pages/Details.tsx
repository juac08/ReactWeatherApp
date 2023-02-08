import { Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../helpers/hooks/useGetData";
import DetailsHeader from "../components/Details/DetailsHeader";
import DetailCard from "../components/Details/DetailCard";
import Description from "../components/Details/Description";
import LoadingSkelton from "../components/UI/Loading/LoadingSkelton";

/**
 * React Functional Component.
 */

const Details: React.FC<DetailsOwnProps> = () => {
  const { city } = useParams();
  const { data, loading } = useFetchData(city || "");
  const navigate = useNavigate();

  return (
    <>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <DetailsHeader cityName={data.name} />
          <Flex
            justifyContent={["center", "space-between", "space-around"]}
            flexWrap="wrap"
            alignItems="center"
            m="auto"
            height="60vh"
            gap="1rem"
          >
            <DetailCard data={data} />
            <Description data={data} />
          </Flex>
        </motion.div>
      )}
      {loading && <LoadingSkelton loading={loading} />}
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
