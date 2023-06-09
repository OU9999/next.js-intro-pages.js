import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <VStack minH="100vh" justifyContent={"center"}>
        <Heading>Page not found.</Heading>
        <Text>길을 잘못 찾았군요...</Text>
        <Link href={"/"}>
          <Button colorScheme={"twitter"} variant="outline">
            Go home
          </Button>
        </Link>
      </VStack>
    </>
  );
}
