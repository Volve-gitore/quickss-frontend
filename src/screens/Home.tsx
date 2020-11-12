import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import COLORS from "../constants/colors";

import { FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { viewHotelResto } from "../store/actions/hotelResto";
import { logout } from "../store/actions/auth";

const Home = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.items.hotelResto);

  const handleLogout = async () => {
    await dispatch(logout());
    props.navigation.navigate("start");
  };

  useEffect(() => {
    dispatch(viewHotelResto());
    // eslint-disable-next-line
  }, []);

  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: 20,
          borderRadius: 40
        }}
      >
        <Button title='Logout' color={COLORS.primary} onPress={handleLogout} />
        <FlatList
          data={restaurant}
          renderItem={itemData => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "90%",
                  height: 370,
                  marginTop: 20,
                  paddingBottom: 8,
                  elevation: 10,
                  shadowColor: "#000000",
                  shadowOffset: { height: 1, width: 1 },
                  shadowRadius: 1,
                  shadowOpacity: 0.8,
                  borderRadius: 20,
                  overflow: "hidden",
                  marginRight: "5%",
                  marginLeft: "5%",
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#fff"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column"
                  }}
                >
                  <Image
                    style={{
                      width: "90%",
                      height: "70%",
                      // marginRight: 20,
                      margin: "5%",
                      ajustifyContent: "center",
                      borderRadius: 20
                    }}
                    resizeMode='cover'
                    source={{
                      uri:
                        itemData.item.images !== null
                          ? itemData.item.images[0]
                          : "http://res.cloudinary.com/ds5zmsm6d/image/upload/v1604843228/eqxhk2wiwmpvhkrwdx1r.jpg"
                    }}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 20
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column"
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row"
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20
                          }}
                        >
                          {itemData.item.name}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row"
                        }}
                      >
                        <AntDesign name='star' size={24} color='#FFB100' />
                        <AntDesign name='star' size={24} color='#FFB100' />
                        <AntDesign name='star' size={24} color='#FFB100' />
                        <AntDesign name='star' size={24} color='#FFB100' />
                      </View>

                      <View
                        style={{
                          flexDirection: "row"
                        }}
                      >
                        <Entypo name='location-pin' size={24} color='black' />
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            fontStyle: "italic"
                          }}
                        >
                          {itemData.item.location}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        flexDirection: "column"
                      }}
                    >
                      <TouchableOpacity>
                        <FontAwesome5
                          name='chevron-circle-right'
                          size={40}
                          color='#DB005B'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Home;
