import {
  Box,
  Center,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

interface IgetServerSideProps {
  params: {
    slug: [string, string];
  };
}

interface IDetail {
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
}

export async function getServerSideProps({ params }: IgetServerSideProps) {
  const id = params.slug[1];
  const response = await fetch(
    `https://next-js-intro-pages-js-ou9999.vercel.app/api/movies/${id}`
  );
  const detail = await response.json();

  return {
    props: { detail },
  };
}

interface IAboutIdProps {
  detail: IDetail;
}

export default function AboutId({ detail }: IAboutIdProps) {
  const coverImg = `https://image.tmdb.org/t/p/w500${detail.backdrop_path}`;
  return (
    <>
      <NextSeo
        title={detail.title}
        description={detail.overview}
        openGraph={{
          type: "website",
          url: "https://www.google.com/",
          title: detail.title,
          description: detail.overview,
          images: [
            {
              url: coverImg,
              width: 285,
              height: 167,
              alt: "image",
            },
          ],
        }}
      />

      <Center pt={"32"} gap={5}>
        <Box padding="6" boxShadow="lg" bg="white" w="sm" h={"md"}>
          {/* <Skeleton h="48" />
          <SkeletonText mt="8" noOfLines={8} spacing="4" /> */}
          <Image alt="bg" src={coverImg} h="48" w="96" />
          <Heading mt={4}>{detail.title}</Heading>
          <Text color={"gray"}>{detail.original_title}</Text>
          <Text noOfLines={4}>{detail.overview}</Text>
        </Box>
      </Center>
    </>
  );
}
