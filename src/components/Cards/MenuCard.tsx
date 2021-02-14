import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import COLORS from "../../constants/colors";

import { FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";

const MenuCard = (props: any) => {
  const { item } = props.item;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => props.navigation.navigate("MenuItem")}
    >
      <View style={styles.imgBox}>
        <Image
          style={styles.itemImg}
          resizeMode="cover"
          source={{
            uri:
              "https://res.cloudinary.com/dp1abfk0j/image/upload/v1568359786/aeug5ovdn77oacxylphy.jpg",
          }}
        />
      </View>
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
        <View style={styles.ingredients}>
          <Text style={styles.txtMini}>Ingredient:</Text>
          {item.ingredients &&
            item.ingredients.map((ingredient: string, index: number) => (
              <Text key={index} numberOfLines={1} style={styles.txtMini}>
                {ingredient},
              </Text>
            ))}
        </View>
        <View style={styles.groups}>
          {item.groups &&
            item.groups.map((group: string, i: number) => (
              <View style={styles.group}>
                <Text key={i} numberOfLines={1}>
                  {group}
                </Text>
              </View>
            ))}
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    elevation: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 7, width: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    borderRadius: 10,
    marginBottom: "5%",
    marginHorizontal: "5%",
    backgroundColor: "#fff",
  },
  imgBox: {
    flex: 2,
  },
  details: {
    flex: 3,
    paddingTop: 12,
    marginHorizontal: 15,
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 16,
  },
  ingredients: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    // backgroundColor: "green",
    // height: 25
    marginBottom: 5
  },
  groups: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    // backgroundColor: "yellow",
  },
  group: {
    fontWeight: "500",
    paddingVertical: 2,
    paddingHorizontal: 7,
    color: "#C2C2C2",
    textTransform: "capitalize",
    borderRadius: 90,
    marginRight: 10,
    backgroundColor: "#eee",
  },
  price: {
    flex: .7,
    textAlign: "right",
    paddingVertical: 7,
    fontWeight: "700",
    textTransform: "lowercase",
    // backgroundColor: "blue",
    fontSize: 12

  },
  itemImg: {
    width: "90%",
    height: "80%",
    margin: "10%",
    justifyContent: "center",
    borderRadius: 10,
  },

  txtMini: {
    fontSize: 13,
    fontWeight: "500",
    paddingRight: 5,
    paddingTop: 3,
    color: "#C2C2C2",
    textTransform: "capitalize",
  },
});
