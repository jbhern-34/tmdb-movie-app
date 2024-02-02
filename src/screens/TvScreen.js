import { Box, Center, VStack, View } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { getList } from "../services/api";
import DropDown from "../components/Dropdown";
import CardList from "../components/CardList";
import { StyleSheet } from "react-native";

const TvScreen = (props) => {
  const { navigation } = props;
  const [selectedValue, setSelectedValue] = useState("airing_today");
  const [tvShow, setTvShow] = useState([]);
  const category = "tv";

  const items = [
    { label: "Airing today", value: "airing_today" },
    { label: "On the air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
    { label: "Top rated", value: "top_rated" },
  ];

  const handleDropdownChange = (itemValue) => {
    setSelectedValue(itemValue);
    getList({ category: category, type: itemValue })
      .then((tvSeries) => {
        setTvShow(tvSeries);
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
          placeholder="Select Option"
        />
      </Center>
      <Center>
        <CardList type={tvShow} category={category} navigation={navigation} />
      </Center>
    </Box>
  );
};

export default TvScreen;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 20,
    marginBottom: 20,
  },
});
