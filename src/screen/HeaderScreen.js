import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"

const HeaderScreen = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: "100%",
            marginRight: 20,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <Text style={{ fontSize: 25, color: "#FFF", fontWeight: 600 }}>
          REACT VIDEO
        </Text>
      </View>
      <View>
        <Feather
          style={{ position: "absolute", top: 8, left: 10 }}
          name="search"
          size={24}
          color="#FFF"
        />
        <TextInput
          placeholder="Tìm kiếm video"
          style={{
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "20%",
            height: 40,
            paddingHorizontal: 40,
          }}
        />
      </View>
    </View>
  )
}

export default HeaderScreen

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginBottom: 10
  },
})
