import { SafeAreaView } from 'react-native'
import { Loading } from '@/components/loading'
import { Slot } from 'expo-router'
import { StripeProvider } from '@stripe/stripe-react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
} from '@expo-google-fonts/inter'

export default function Layout(){

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    })

    const stripePublicKey = Constants.expoConfig?.extra?.stripePublicKey;
    console.log(stripePublicKey)
    if(!fontsLoaded){
        return <Loading />
    }
    

    return (
        <StripeProvider publishableKey={stripePublicKey}>
            <SafeAreaView className="flex-1 bg-slate-900">
                <StatusBar backgroundColor='white' translucent/>
                <Slot></Slot>
            </SafeAreaView>
        </StripeProvider>
    )

}

