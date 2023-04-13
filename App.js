import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import ItemMovie from "./src/screen/ItemMovie"
import HeaderScreen from "./src/screen/HeaderScreen"

const dataAPI = require("./youtube-api.json")

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />
      <FlatList
        data={dataAPI}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <ItemMovie item={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  header_text: {
    color: "#fff",
    fontSize: 16,
  },
  body: {
    width: "100%",
    paddingHorizontal: 10,
  },
})
