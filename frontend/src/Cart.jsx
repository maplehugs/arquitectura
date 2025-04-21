import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function ShoppingCart() {
    return (
        <div className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navigation */}
            <header className="w-full h-[164px] border-b flex items-center justify-between px-20">
                <div className="text-xl font-medium">LudoRum</div>
                <NavigationMenu>
                    <NavigationMenuList className="space-x-12">
                        <NavigationMenuItem className="text-xl font-medium text-black cursor-pointer">Page</NavigationMenuItem>
                        <NavigationMenuItem className="text-xl font-medium text-black cursor-pointer">Page</NavigationMenuItem>
                        <NavigationMenuItem className="text-xl font-medium text-black cursor-pointer">Page</NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button className="rounded-lg shadow" variant="default">
                                Profile
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-start px-20 py-10 space-y-10">
                <div className="flex gap-10">
                    {/* PayPal Option */}
                    <Card className="w-[613px] h-[168px] bg-stone-400 px-[46px] py-8">
                        <CardContent className="flex items-center gap-9">
                            <img
                                src="https://placehold.co/178x103"
                                alt="PayPal"
                                className="w-[178px] h-[103px] rounded-lg"
                            />
                            <div className="text-2xl font-medium text-black">PayPal</div>
                        </CardContent>
                    </Card>

                    {/* Cart Section */}
                    <Card className="w-[643px] h-[755px] bg-neutral-300 px-7 py-8">
                        <CardContent className="flex flex-col items-center gap-5">
                            {/* Cart Items Placeholder */}
                            <div className="w-full h-[494px] bg-zinc-300 rounded-lg" />

                            {/* Terms and Buy Button */}
                            <div className="w-[497px] flex flex-col items-center gap-8">
                                <p className="text-base font-medium text-zinc-700 text-center">
                                    By clicking "Continue," I declare that I have read and accepted the Terms and Conditions,
                                    as well as the Privacy and Cookie Policy. I have also read and accepted Gift Card Mall's
                                    Refund Policy and Terms and Conditions.
                                </p>

                                <PayPalScriptProvider
                                    options={{
                                        "client-id":
                                            "AWFFvO5knA5rBefrO1u_ueG0d8rspdqVQMNlbRKMy1nIrBXQ6YscLqBep7f81P_WY_eYmCAq6A9hPowy",
                                    }}
                                >
                                    <h2>Comprar Producto</h2>
                                    <PayPalButtons
                                        style={{ layout: "vertical" }}
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: "40",
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                alert(
                                                    "Pago completado por " + details.payer.name.given_name
                                                );
                                            });
                                        }}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
