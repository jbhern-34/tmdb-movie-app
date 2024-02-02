import { Box, Center, HStack, Heading, Image, ScrollView, Text, View } from "@gluestack-ui/themed";
import { BASE_URL, API_KEY } from "../config/api_config";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const { id, category } = route.params;
  const [movieDetails, setMovieDetails] = useState("");

  const url = BASE_URL;
  const api = API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${url}${category}/${id}?api_key=${api}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching API:", error);
        throw error;
      }
    };

    fetchMovieDetails();

    navigation.setOptions({
      title: movieDetails.original_title
        ? movieDetails.original_title
        : movieDetails.original_name,
      headerStyle: {
        backgroundColor: "white",
      },
      headerTitleStyle: {
        color: "black",
      },
    });
  }, [navigation, id, movieDetails]);

  return (
    <ScrollView>
      <Box>
        <Center>
          <Heading style={styles.header} textAlign="center">
            {movieDetails.original_title
              ? movieDetails.original_title
              : movieDetails.original_name}
          </Heading>
          <Image 
          style={{ aspectRatio: 440 / 660, borderRadius: 5, marginBottom: 20 }}
          size="2xl"
          alt="Movie Poster"
          borderRadius={5}
          source={{
            uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}`,
          }}
          />
        </Center>
        <Text textAlign="center" style={{padding: 16}}>{movieDetails.overview}</Text>
        <HStack gap={4} justifyContent="center" style={{marginTop: 16}}>
            <Text size="xs">Popularity: {movieDetails.popularity}</Text>
            <Text size="xs">|</Text>
            <Text size="xs">Release Date: {movieDetails.release_date}</Text>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})
