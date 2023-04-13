import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native"
import React from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { AntDesign } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"

const ItemMovie = ({ item }) => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      imageStyle={{ opacity: 0.5 }}
      source={{ uri: item.image }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, width: "70%" }}>
          {item.name}
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(item.url)
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: "100%",
              backgroundColor: "#f83960",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <FontAwesome
              style={{ marginLeft: 5 }}
              name="play"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: "#fff" }}>{item.time}</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: "100%",
            borderColor: "#fff",
            backgroundColor: "rgba(255, 255, 255,0.05)",
            marginRight: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="hearto" color="#fff" size={15} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: "100%",
            borderColor: "#fff",
            backgroundColor: "rgba(255, 255, 255,0.05)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="share" size={15} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default ItemMovie

const styles = StyleSheet.create({
  imageBackground: {
    marginTop: 20,
    overflow: "hidden",
    borderRadius: "10%",
    padding: 20,
    height: 230,
    justifyContent: "space-between",
  },
})
