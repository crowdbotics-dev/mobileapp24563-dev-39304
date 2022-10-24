import React, { useEffect } from "react"
import {
  Text,
  FlatList,
  View,
  Pressable,
  ImageBackground,
  SafeAreaView
} from "react-native"
import { styles } from "./styles"
import { slice, api_v1_car_list } from "../../store/mobileAppAPI/cars.slice.js"
import { useSelector, useDispatch } from "react-redux"
import { createStackNavigator } from "@react-navigation/stack"
import Article from "./article"

const ArticlesList = ({ route, navigation }) => {
  const detail = route.params?.detail || "Article"
  const articles = useSelector(state => {
    return Object.entries(state.Cars.entities).map(([, entry]) => entry)
  })
  const dispatch = useDispatch()
  useEffect(async () => {
    dispatch(api_v1_car_list()).catch(e => console.log(e.message))
  }, [detail])

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate(detail, {
          id: item.id
        })
      }}
    >
      <ImageBackground
        source={{
          uri: item.picture
        }}
        style={styles.image}
      >
        <View style={styles.card}>
          <Text style={styles.text}>{item.model}</Text>
          <Text style={styles.author}>
            {item.brand} ({item.year})
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  )

  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

const ArticlesNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Articles">
    <Stack.Screen name="Articles" component={ArticlesList} />
    <Stack.Screen name="Article" component={Article} />
  </Stack.Navigator>
)

export default {
  title: "Articles",
  navigator: ArticlesNavigator,
  slice
}
