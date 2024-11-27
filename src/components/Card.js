import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" h={200} w="full" />
      <VStack align="start" p={6} spacing={4} flex="1">
        <Heading size="md">{title}</Heading>
        <Text color="gray.500" fontSize="sm" noOfLines={3}>
          {description}
        </Text>
        <HStack spacing={1} alignItems="center" color="blue.500">
          <Text>Learn More</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;