import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  HStack,
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { useState } from "react";
import DropDown from "../components/Dropdown";
import CardList from "../components/CardList";
import { StyleSheet } from "react-native";
import { getSearchResult } from "../services/api";

const SearchScreen = (props) => {
  const { navigation } = props;
  const [selectedValue, setSelectedValue] = useState("movie");
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [searchisInvalid, setSearchisInvalid] = useState(false);
  const category = "search";

  const items = [
    { label: "movie", value: "movie" },
    { label: "multi", value: "multi" },
    { label: "tv", value: "tv" },
  ];

  const handleInputChange = (text) => {
    setInputValue(text);
    setSearchisInvalid(false);
  };

  const handleDropdownClick = (value) => {
    setSelectedValue(value);
    setIsInvalid(false);
  };

  const handleSubmit = () => {
    console.log(selectedValue);
    if (selectedValue !== "" && inputValue !== "") {
      getSearchResult({ type: selectedValue, query: inputValue })
        .then((searchResult) => {
          setSearch(searchResult);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (selectedValue === "") {
        setIsInvalid(true);
      }
      if (inputValue === "") {
        setSearchisInvalid(true);
      }
    }
  };

  return (
    <Box>
      <Center>
        <VStack style={styles.container}>
          <Text style={{ marginBottom: 10 }}>Search Movie/TV Show Name</Text>
          <HStack gap={10}>
            <VStack style={{ width: 230 }}>
              <Input
                px={10}
                style={styles.inputStyles}
                isInvalid={searchisInvalid}
              >
                <InputIcon>
                  <Icon as={SearchIcon} size="sm" />
                </InputIcon>
                <InputField
                  onChangeText={handleInputChange}
                  placeholder="Enter a show..."
                />
              </Input>
              {searchisInvalid && <Text size="xs">Please input text</Text>}
            </VStack>
            <Button
            onPress={handleSubmit}
            >
              <ButtonIcon as={SearchIcon} style={{ width: 20 }}/>
            </Button>
          </HStack>
        </VStack>
      </Center>
      <Center style={styles.dropdown}>
        <Text style={{width: 310, marginBottom:8}}> Choose Search Type</Text>
        <DropDown
          items={items}
          selectedValue={selectedValue}
          onValueChange={handleDropdownClick}
          placeholder="Select Option"
        />
      </Center>

      <Center>
        <CardList type={search} category={category} navigation={navigation} />
      </Center>
    </Box>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 300,
  },
  dropdown: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputStyles: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
