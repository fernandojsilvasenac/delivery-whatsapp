import { SafeAreaView } from 'react-native'
import { Loading } from '@/components/loading'
import { Slot } from 'expo-router'
import { StripeProvider } from '@stripe/stripe-react-native';
import { useEffect, useState } from 'react';

import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
} from '@expo-google-fonts/inter'

export default function Layout(){
    // const [publishableKey, setPublishableKey] = useState('');

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    })

    if(!fontsLoaded){
        return <Loading />
    }
    const STRIPE_PUBLIC_KEY='pk_test_51O4XjoCYBBZmPQEINuJV13MqHeVjvQUiMq1MmCVL9Xz3AaCVSRtJ2QWX3deq4FNPzKHtP8Uyt4PygVQcTGACC9oM00NxuYWWfx'
    // const fetchPublishableKey = async () => {
    //     const key = await process.env.STRIPE_PUBLIC_KEY || ''; // fetch key from your server here
    //     console.log(key)
    //     setPublishableKey(key);
    // };
    
    //   useEffect(() => {
    //     fetchPublishableKey();
    //   }, []);

    return (
        <StripeProvider publishableKey={STRIPE_PUBLIC_KEY || ''}>
            <SafeAreaView className="flex-1 bg-slate-900">
                <Slot></Slot>
            </SafeAreaView>
        </StripeProvider>
    )

}

