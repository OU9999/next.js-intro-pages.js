import MovieCard from "@/components/MovieCard";
import { Grid, Text, VStack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: { results },
  };
}

interface IMovies {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
}

interface IHomeProps {
  results: IMovies[];
}

export default function Home({ results }: IHomeProps) {
  return (
    <>
      <NextSeo
        title="hi"
        description="hello"
        openGraph={{
          type: "website",
          url: "no",
          title: "title",
          description: "desc",
          images: [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/ou9999-first-blog.appspot.com/o/imgs%2Fabout_time.jpeg?alt=media&token=6af14667-6750-414e-84e5-9fe49067f5f7",
              width: 285,
              height: 167,
              alt: "image",
            },
          ],
        }}
      />

      <VStack pt={"32"}>
        <Text>Home</Text>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          px={10}
          columnGap={8}
          rowGap={16}
          pb={20}
        >
          {results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              original_title={movie.original_title}
              overview={movie.overview}
              backdrop_path={movie.backdrop_path}
              release_date={movie.release_date}
            />
          ))}
        </Grid>
      </VStack>
    </>
  );
}
