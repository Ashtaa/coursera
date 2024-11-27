import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar size="2xl" name="Pete" src="https://i.pravatar.cc/150?img=7" />
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {greeting}
        </Heading>
        <Heading as="h3" size="xl" color="gray.400">
          {bio1}
        </Heading>
        <Heading as="h3" size="xl" color="gray.400">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;