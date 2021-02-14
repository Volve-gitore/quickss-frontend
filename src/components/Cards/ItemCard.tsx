import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import COLORS from "../../constants/colors";

import { AntDesign, Entypo } from "@expo/vector-icons";

const ItemCard = (props: any) => {
  const { item } = props;
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.itemImg}
          resizeMode="cover"
          source={{
            uri:
              item.item.images !== null
                ? item.item.images[0]
                : "http://res.cloudinary.com/ds5zmsm6d/image/upload/v1604843228/eqxhk2wiwmpvhkrwdx1r.jpg",
          }}
        />

        <View style={styles.itemInfo}>
          <View style={{ flex: 3 }}>
            <Text numberOfLines={1} style={styles.itemName}>
              {item.item.name}
            </Text>
            <View style={styles.itemRatings}>
              <AntDesign name="star" size={15} color="#FFB100" />
              <AntDesign name="star" size={15} color="#FFB100" />
              <AntDesign name="star" size={15} color="#FFB100" />
              <AntDesign name="star" size={15} color="#FFB100" />
              <AntDesign name="star" size={15} color="#FFB100" />
            </View>

            <View style={styles.locationContainer}>
              <Entypo
                style={{ marginTop: 1 }}
                name="location-pin"
                size={17}
                color="black"
              />
              <Text numberOfLines={1} style={styles.itemLocation}>
                {item.item.location} Kabeza
              </Text>
            </View>
          </View>

          <View style={styles.more}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => props.navigation.navigate("Menu")}
            >
              <Text style={{ color: "white" }}>Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "80%",
    height: 300,
    elevation: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.8,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: "5%",
    marginHorizontal: "10%",
    backgroundColor: "#fff",
  },
  itemImg: {
    width: "90%",
    height: "70%",
    marginTop: "5%",
    marginHorizontal: "5%",
    justifyContent: "center",
    borderRadius: 20,
  },
  itemInfo: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 7,
  },
  itemName: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  itemRatings: {
    flexDirection: "row",
    marginTop: 4,
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  itemLocation: {
    fontWeight: "bold",
    fontSize: 15,
    fontStyle: "italic",
  },
  more: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
});

export default ItemCard;
