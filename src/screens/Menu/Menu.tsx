import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  ImageBackground,
  Text,
} from "react-native";
import MenuCard from "../../components/MenuCard";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SmallButton from "../../components/UI/Buttons/Button";

const Menu = () => {
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
      ingredients: ["oil", "potatoes", "salt", "fire"],
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
      <ImageBackground
        source={{
          uri:
            "https://res.cloudinary.com/dp1abfk0j/image/upload/v1568359786/aeug5ovdn77oacxylphy.jpg",
        }}
        style={styles.topBox}
      >
        <View>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeSearch}
            //   value={searchQuery}
            underlineColorAndroid="transparent"
            placeholder="Search"
          />
        </View>
      </ImageBackground>

      <View style={styles.menuBox}>
        <View style={styles.info}>
          <View style={styles.header}>
            <Text style={styles.title}>Quickss Hotel</Text>
            <Fontisto name="more-v-a" size={20} color="#5D5D5D" />
          </View>

          <View style={styles.specBox}>
            <Entypo
              name="location-pin"
              size={22}
              style={{ marginLeft: -5 }}
              color="#5D5D5D"
            />
            <Text style={styles.spec}>Kigali - Kimihurura</Text>
          </View>
          <View style={styles.specBox}>
            <Ionicons
              name="ios-time"
              color="#5D5D5D"
              style={{
                fontSize: 17,
              }}
            />
            <Text style={styles.spec}> 8:00 - 22:00</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <SmallButton
                active={activeType === "food"}
                label="food"
                pressed={() => handleChangeType("food")}
              />
              <SmallButton
                active={activeType === "drinks"}
                label="drinks"
                pressed={() => handleChangeType("drinks")}
              />
            </View>
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={(itemData) => <MenuCard item={itemData} />}
        />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  topBox: {
    flex: 1.7,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignContent: "center",
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
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
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
    flex: 3.7,
    marginBottom: 40,
    marginTop: -50,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "#F9F9F9"
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
