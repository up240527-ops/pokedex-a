import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: PokemonProps) {
  const id = url
    .split("/")
    .filter((part) => part !== "")
    .pop();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View>
      <Text>{name}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
