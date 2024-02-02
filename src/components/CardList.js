import { FlatList, VStack, View } from "@gluestack-ui/themed";
import Card from "./Card";

const CardList = (props) => {
  const { type, category, navigation } = props;
  return (
    <View>
      <FlatList
        data={type}
        renderItem={({item}) => (
          <VStack space="md">
            <Card
              id={item.id}
              image={item.poster_path}
              title={item.name ? item.name : item.title}
              popularity={item.popularity}
              date={item.release_date}
              overview={item.overview}
              category={category}
              navigation={navigation}
            />
          </VStack>
        )}
      />
    </View>
  );
};

export default CardList;
