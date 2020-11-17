import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { viewHotelResto } from "../store/actions/hotelResto";
import ItemCard from "../components/ItemCard";

const Home = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.items.hotelResto);

  const loadProducts = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(viewHotelResto());
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <View style={styles.screen}>
      <FlatList
        onRefresh={loadProducts}
        refreshing={isRefreshing}
        keyExtractor={(item, index) => index.toString()}
        style={styles.itemList}
        showsVerticalScrollIndicator={false}
        data={restaurant}
        renderItem={(itemData) => <ItemCard item={itemData} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F1F1F1",
  },
  itemList: {
    paddingTop: 10,
    paddingHorizontal: 15,
    height: "89%",
  },
});

export default Home;
