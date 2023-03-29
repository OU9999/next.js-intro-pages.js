import { Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <HStack
        px="10"
        py="3"
        gap={3}
        w="full"
        position="fixed"
        zIndex={99}
        bgColor="#fff"
        boxShadow={"dark-lg"}
      >
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/about">
          <Button>about</Button>
        </Link>
      </HStack>
    </>
  );
}
