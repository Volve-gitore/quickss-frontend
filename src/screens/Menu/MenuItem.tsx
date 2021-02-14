import React, { useState } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import MenuCard from "../../components/Cards/MenuCard";
import MenuItemCard from "../../components/Cards/MenuItemCard";

const MenuItem = () => {
  const [activeType, setActiveType] = useState("food");
  const list = [
    {
      name: "Chips",
      ingredients: ["oil", "potatoes", "salt"],
      groups: ["Beak fast", "Dinner"],
      price: "5000 RWF",
      images: null,
    },
    {
      name: "Soda",
      ingredients: ["oil", "potatoes", "salt", "fire"],
      groups: ["Beak fast 2", "Dinner 2"],
      price: "5000 RWF",
      images: null,
    },
    {
      name: "Pizza",
      ingredients: ["Backgroundoil", "potatoes", "salt", "fire"],
      groups: ["Beak fast 3", "Dinner 3"],
      price: "5000 RWF",
      images: null,
    },
    {
      name: "Chicken",
      ingredients: ["oil", "potatoes", "salt", "fire"],
      groups: ["Beak fast 4", "Dinner 4"],
      price: "5000 RWF",
      images: null,
    },
  ];
  const handleChangeType = (type: string) => {
    setActiveType(type);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.topBox}>
        <Image
          style={{
            flex: 4,
            // margin: 5,
            borderColor: "transparent",
            // borderRadius: 40,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
          source={{
            uri:
              "https://res.cloudinary.com/dp1abfk0j/image/upload/v1568359786/aeug5ovdn77oacxylphy.jpg",
          }}
        />
        <View style={{ flex: 1, padding: 10, flexDirection: "row" }}>
          <Text style={styles.title}> {list[0].name}</Text>
          <View style={styles.subTitle}>
            <Text style={styles.subTitle}>Starting from</Text>
            <Text style={styles.title}> {list[0].price}</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuBox}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={(itemData) => <MenuItemCard item={itemData} />}
        />
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  topBox: {
    flex: 0.8,
    // backgroundColor: "#ccc",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    backgroundColor: "white",
    marginTop: 70,
    marginHorizontal: 20,
  },
  info: {
    paddingTop: 17,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#5D5D5D",
    flex: 2,
  },
  subTitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    // textTransform: "uppercase",
    color: "#5D5D5D",
  },
  specBox: {
    flexDirection: "row",
    marginTop: 2,
  },
  spec: {
    color: "#5D5D5D",
    marginLeft: 5,
  },
  menuBox: {
    flex: 1,
    marginBottom: 40,
    marginTop: 20,
    // borderTopRightRadius: 40,
    // borderTopLeftRadius: 40,
    backgroundColor: "#F9F9F9",
  },
  input: {
    width: "80%",
    height: 40,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: "10%",
  },
});
