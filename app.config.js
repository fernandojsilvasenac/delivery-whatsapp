// app.config.js ou app.json
export default {
    expo: {
        name: "delivery-whatsapp",
        slug: "delivery-whatsapp",
        scheme: "myapp",
        extra: {
            stripePublicKey: process.env.STRIPE_PUBLIC_KEY
        },
        orientation: "portrait",
        icon: "./assets/images/icon.png", 
    }    
}