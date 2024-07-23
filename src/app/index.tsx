import { useState } from "react";
import { View, Text, FlatList, SectionList } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";
import { CATEGORIES, MENU } from "@/utils/data/products";

export default function Home(){
    const [category, setCategory] = useState(CATEGORIES[0])
    function handleCategorySelect(selectedCategory: string){
        setCategory(selectedCategory)
        const sectionIndex = CATEGORIES.findIndex(category => category === selectedCategory)
    }

    return(
        <View>
            <Header title="Faça seu Pedido" cartQuantityItems={0} />
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({item}) =>
                    <CategoryButton
                        title={item}
                        isSelected={item === category}
                        onPress={() =>handleCategorySelect(item)}
                    />    
                }
                horizontal
                className="max-h-10 mt-1"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap:12, paddingHorizontal:20}}
            />
            <SectionList
                sections={MENU}
                keyExtractor={(item) => item.id}
                // não fazer efeito de esticar
                stickySectionHeadersEnabled={false}
                renderItem={({item}) =>
                    <Text className="text-white">{item.title}</Text>
                }
                renderSectionHeader={({section: {title}}) => (
                    <Text className="text-yellow-200">{title}</Text>
                )}
            />

        </View>
        )
}


{/* 
<View className="flex-row gap-8">
<CategoryButton title="Lanche do dia"  />
<CategoryButton title="Promoções" isSelected />
<CategoryButton title="Sobremesa" />
<CategoryButton title="Bebidas" />
</View> 
*/}
