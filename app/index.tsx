import PokemonCard from "@/components/PokemonCard";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("entre a pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setResults(data.results);
  };

  return (
    <ScrollView>
      <View>
        {results.map((item) => {
          return (
            <PokemonCard key={item.name} name={item.name} url={item.url} />
          );
        })}
      </View>
    </ScrollView>
  );
}
