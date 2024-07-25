import { View, Text, Image } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { PRODUCTS } from "@/utils/data/products";
import { yellow } from "tailwindcss/colors";

export default function Product(){
    const { id } = useLocalSearchParams()

    // Filtrar produto
    const product = PRODUCTS.filter((item) => item.id === id)[0]

    return(
        <View className="flex-1 mt-5">
            <MaterialIcons 
                size={42}
                name="arrow-back"
                onPress={() =>router.back()}
                color={'yellow'}
            />
            <Image source={product.cover} className="w-full h-52" resizeMode="cover" />
            <View className="p-5 mt-8 flex-1">
                <Text className="text-white">{product.title}</Text>
                <Text className="text-white">{product.price}</Text>
                <Text className="text-white">{product.description}</Text>
                {product.ingredients.map(ingredient => (
                <Text className="text-white" key={ingredient}>
                    {'\u2022'} {ingredient}
                </Text>
                ))}


            </View>
        </View>
    )
}