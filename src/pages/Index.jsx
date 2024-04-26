import { Box, Container, Heading, Text, SimpleGrid, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaChartLine, FaDatabase, FaUsers, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Data Fabric Market Insights
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Explore the latest trends, competitor analysis, and future predictions in the data fabric industry.
        </Text>
        <Image src="https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZmFicmljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTQxNTQ0Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <Heading as="h2" size="lg" mt={10}>
          Market Trends
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Icon as={FaChartLine} w={10} h={10} />
            <Heading as="h3" size="md">
              Growth Patterns
            </Heading>
            <Text mt={4}>The data fabric market is expected to grow at a CAGR of 26.3% from 2021 to 2028.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Icon as={FaDatabase} w={10} h={10} />
            <Heading as="h3" size="md">
              Technology Adoption
            </Heading>
            <Text mt={4}>Increased adoption of cloud services and decentralized data management systems.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Icon as={FaUsers} w={10} h={10} />
            <Heading as="h3" size="md">
              Industry Impact
            </Heading>
            <Text mt={4}>Significant impacts in healthcare, finance, and retail through improved data integration.</Text>
          </Box>
        </SimpleGrid>

        <Heading as="h2" size="lg" mt={10}>
          Competitor Analysis
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">
              Company A
            </Heading>
            <Text mt={4}>A leading provider of data integration solutions, known for its robust and scalable platform.</Text>
            <Link href="https://companya.com" isExternal>
              Visit Website <Icon as={FaExternalLinkAlt} mx="2px" />
            </Link>
          </VStack>
          <VStack align="start" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">
              Company B
            </Heading>
            <Text mt={4}>Innovator in real-time data processing and analytics, offering unique insights into customer data.</Text>
            <Link href="https://companyb.com" isExternal>
              Visit Website <Icon as={FaExternalLinkAlt} mx="2px" />
            </Link>
          </VStack>
        </SimpleGrid>

        <Heading as="h2" size="lg" mt={10}>
          Future Predictions
        </Heading>
        <Text fontSize="lg" mt={4}>
          The future of data fabric involves greater AI integration, enhanced security features, and more personalized data experiences for end-users.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
