import { View, Text, ScrollView, Alert } from "react-native";

import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { Input } from "@/components/input";

import { ProductCartProps, useCartStore } from "@/store/cart-store";
import { Feather } from "@expo/vector-icons";
import { formatCurrency } from "@/utils/functions/format-currency";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Cart(){
    const cartStore = useCartStore()

    const isProducts = cartStore.products.length > 0

    const total = formatCurrency(
        cartStore.products.reduce(
            (total, product) => total + product.price * product.quantity, 0
        ))

    function handleProductRemove(product: ProductCartProps){
        Alert.alert('Remover', `Deseja remover ${product.title} da sacolinha`, [
            {
                text: 'Cancelar'
            },
            {
                text: 'Remover',
                onPress:() => cartStore.remove(product.id)
            }
        ])
    }
            
    return(
        <View className="flex-1 pt-8">
            <Header title="Minha Sacolinha"/>
            <KeyboardAwareScrollView>
            <ScrollView>
            <View className="flex-1 p-5">    
            { isProducts ? (   
                <View className="border-b border-slate-700">
                    {   
                        cartStore.products.map(product => (
                            <Product key={product.id} data={product} 
                            onPress={() => handleProductRemove(product)}/>
                        ))
                    }
                </View>
              ) : (
                <Text className="font-body text-slate-400 text-2xl text-center my-8">
                    Sua sacolinha está vazia...
                </Text>
              ) 
            }        
                <View className="flex-row gap-2 items-center mt-5 mb-4">
                    <Text className="text-white text-xl font-subtitle">Total:</Text>
                    <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
                </View>
                <Input placeholder="Informe o endereço de entrega com rua,
                bairro, CEP, número e complemento..."/>
            </View>                
            </ScrollView>
            </KeyboardAwareScrollView>
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