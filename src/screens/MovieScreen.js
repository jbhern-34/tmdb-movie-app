import { Box, Center, VStack, View } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { getList } from "../services/api";
import DropDown from "../components/Dropdown";
import CardList from "../components/CardList";
import { StyleSheet } from "react-native";

const MovieScreen = (props) => {
  const { navigation } = props;
  const [selectedValue, setSelectedValue] = useState("popular");
  const [movies, setMovies] = useState([]);
  const category = "movie";

  const items = [
    { label: "Popular", value: "popular" },
    { label: "Now Playing", value: "now_playing" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const handleDropdownChange = (itemValue) => {
    setSelectedValue(itemValue);
    getList({ category: category, type: itemValue })
      .then((movieResults) => {
        setMovies(movieResults);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    handleDropdownChange(selectedValue);
  }, []);

  return (
    <Box>
      <Center style={styles.dropdown}>
        <DropDown
          items={items}
          selectedValue={selectedValue}
          onValueChange={handleDropdownChange}
          placeholder='Select Option'
        />
      </Center>
      <Center>
        <CardList type={movies} category={category} navigation={navigation} />
      </Center>
    </Box>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 20,
        marginBottom: 20,
    }
})
