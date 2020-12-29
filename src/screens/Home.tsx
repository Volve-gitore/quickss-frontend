import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { viewHotelResto } from "../store/actions/hotelResto";
import ItemCard from "../components/ItemCard";
import { SearchBar } from "react-native-elements";
import NotFound from "../components/NotFound";

const Home = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const hotelResto = useSelector((state) => state.items.hotelResto);

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
  const filteredHotelResto = React.useMemo(() => {
    return hotelResto.filter((resto: any) => resto.name.includes(searchQuery));
  }, [hotelResto, searchQuery]);

  return (
    <View style={styles.screen}>
      {hotelResto !== undefined ? (
        <>
          <SafeAreaView>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={onChangeSearch}
              value={searchQuery}
              underlineColorAndroid="transparent"
              placeholder="Search"
            />
          </SafeAreaView>

          <FlatList
            onRefresh={loadProducts}
            refreshing={isRefreshing}
            keyExtractor={(item, index) => index.toString()}
            style={styles.itemList}
            showsVerticalScrollIndicator={false}
            data={filteredHotelResto}
            renderItem={(itemData) => <ItemCard {...props} item={itemData} />}
          />
        </>
      ) : (
        <NotFound />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F8F8F8",
  },
  itemList: {
    paddingTop: 10,
    paddingHorizontal: 10,
    height: "89%",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: "10%",
    width: "80%",
    marginTop: "2%",
  },
});

export default Home;
