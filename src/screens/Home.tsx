import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  SafeAreaView,
  Text,
  TextInput
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { viewHotelResto } from "../store/actions/hotelResto";
import ItemCard from "../components/ItemCard";
import { SearchBar } from "react-native-elements";

const Home = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.items.hotelResto);

  const loadProducts = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(viewHotelResto());
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);
  const filteredRestaurant = React.useMemo(() => {
    return restaurant.filter((resto: any) => resto.name.includes(searchQuery));
  }, [restaurant, searchQuery]);
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={onChangeSearch}
          value={searchQuery}
          underlineColorAndroid='transparent'
          placeholder='Search'
        />
      </SafeAreaView>

      <FlatList
        onRefresh={loadProducts}
        refreshing={isRefreshing}
        keyExtractor={(item, index) => index.toString()}
        style={styles.itemList}
        showsVerticalScrollIndicator={false}
        data={filteredRestaurant}
        renderItem={itemData => <ItemCard item={itemData} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F1F1F1"
  },
  itemList: {
    paddingTop: 10,
    paddingHorizontal: 15,
    height: "89%"
  },
  container: {
    justifyContent: "center",
    marginLeft: "10%",
    width: "80%",
    marginTop: "2%",
    borderRadius: 20
  },
  itemStyle: {
    padding: 10
  },
  textInputStyle: {
    height: 40,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    borderRadius: 20
  }
});

export default Home;
