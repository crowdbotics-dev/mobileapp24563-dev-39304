import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

function Article({ route }) {
  console.log(route.params?.id);
  const id = route.params?.id;
  const article = useSelector(state =>
    state.Cars.entities[id]
  );

  return (
    <View>
      {article && (
        <View>
          <ImageBackground source={{ uri: article.picture }} style={[styles.image, {marginTop: 30}]}>
            <View style={styles.card}>
              <Text style={styles.text}>{article.model}: Price ${article.price}</Text>
              <Text style={styles.author}>{article.brand} ({article.year})</Text>
            </View>
          </ImageBackground>
          <Text style={styles.body}>{article.description}</Text>
        </View>
      )}
    </View>
  );
}

export default Article;
