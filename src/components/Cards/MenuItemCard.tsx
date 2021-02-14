import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import COLORS from "../../constants/colors";

import { FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";

const MenuItemCard = (props: any) => {
  const { item } = props.item;

  return (
    <TouchableOpacity style={styles.card}>
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
        <Text numberOfLines={1} style={styles.subTitle}>
          {item.groups[0]}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MenuItemCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    // height: 50,
    elevation: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 7, width: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    borderRadius: 10,
    marginBottom: "5%",
    marginHorizontal: "5%",
    backgroundColor: "#EFEFEF",
  },
  imgBox: {
    flex: 1.3,
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
    fontSize: 20,
  },
  subTitle: {
    textTransform: "capitalize",
    fontSize: 12,
  },

  price: {
    flex: 1,
    textAlign: "right",
    paddingVertical: 5,
    fontWeight: "700",
    textTransform: "lowercase",
  },
  itemImg: {
    width: "90%",
    height: "80%",
    margin: "10%",
    justifyContent: "center",
    borderRadius: 10,
  },
});
