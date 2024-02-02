import { Box } from "@gluestack-ui/config/build/theme";
import {
  Button,
  ButtonText,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const Card = (props) => {
  const { id, image, title, popularity, date, category, navigation } = props;
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return (
    <View style={styles.container}>
      <HStack space="md">
        <Image
          h={110}
          w={110}
          alt="Movie Image"
          borderRadius={10}
          size="xl"
          source={{
            uri: `https://media.themoviedb.org/t/p/w440_and_h660_face/${image}`,
          }}
        />
        <VStack style={styles.details}>
          <Heading size="sm">{truncateTitle(title, 20)}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {date}</Text>
          <Button
            onPress={() => {
              navigation.navigate("Details", {
                id: id,
                category: category,
              });
            }}
          >
            <ButtonText>More Details</ButtonText>
          </Button>
        </VStack>
      </HStack>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  details: {
    width: 220,
  },
});
