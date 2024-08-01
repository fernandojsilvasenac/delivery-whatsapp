import { View, Text, ScrollView } from "react-native";

import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

import { useCartStore } from "@/store/cart-store";
import { Feather } from "@expo/vector-icons";
import { formatCurrency } from "@/utils/functions/format-currency";


export default function Cart(){
    const cartStore = useCartStore()

    const isProducts = cartStore.products.length > 0

    const total = formatCurrency(
        cartStore.products.reduce(
            (total, product) => total + product.price * product.quantity, 0
        ))


    return(
        <View className="flex-1 pt-8">
            <Header title="Minha Sacolinha"/>
            <ScrollView>
            { isProducts ? (   
                <View className="flex-1 p-5">
                    {   
                        cartStore.products.map(product => (
                            <Product key={product.id} data={product} />
                        ))
                    }
                </View>
              ) : (
                <Text className="font-body text-slate-400 text-center my-8">
                    Seu carrinho está vazio.
                </Text>
              ) 
            }        
                <View className="flex-row gap-2 items-center mt-5 mb-4">
                    <Text className="text-white text-xl font-subtitle">Total:</Text>
                    <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
                </View>
            </ScrollView>
            <View className="p-5 gap-5">
                <Button onPress={() => {}}>
                    <Button.Text>Enviar Pedido</Button.Text>
                    <Button.Icon>
                        <Feather name="arrow-right-circle" size={20} />
                    </Button.Icon>
                </Button>
                <LinkButton title="Voltar ao cardápio" href="/"/>
            </View>
        </View>
    )
}