import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';
import RecoverPassword from './RecoverPassword.jsx';
import Cart from './Cart.jsx';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

function Home() {

    const [message, setMessage] = useState('');

    const handleClick = () => {
        fetch("/api/hello-world")
            .then(res => res.text())
            .then(data => setMessage(data))
            .catch(err => console.error("API error:", err));
    };

    return (
        <div className="w-full min-h-screen bg-white px-10">
            {/* Top Navigation */}
            <div className="w-full h-[164px] flex items-center justify-between border-b">
                <div className="text-xl font-medium">Site name</div>
                <NavigationMenu>
                    <NavigationMenuList className="space-x-6">
                        <NavigationMenuItem>
                            <Link to="#" className="text-xl font-medium">Page</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="#" className="text-xl font-medium">Page</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="Cart" className="text-xl font-medium">Cart</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="Login" className="text-xl font-medium">Login</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Section title */}
            <div className="mt-10 text-3xl font-semibold">Board Games</div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {[
                    {
                        title: "Monopoly Harry Potter Board Game",
                        description: "Description of first product",
                        price: "199.900",
                        img: "https://placehold.co/404x211"
                    },
                    {
                        title: "Monopoly Súper Banco Electrónico",
                        description: "Description of second product",
                        price: "$ 179.900",
                        img: "https://placehold.co/404x202"
                    },
                    {
                        title: "Hasbro Gaming Conecta 4",
                        description: "Description of third product",
                        price: "$ 371.900",
                        img: "https://placehold.co/404x202"
                    },
                    {
                        title: "Fan Hasbro Gaming Risk",
                        description: "Description of fourth product",
                        price: "$ 89.900",
                        img: "https://placehold.co/404x202"
                    },
                    {
                        title: "Otro juego",
                        description: "Description of fifth product",
                        price: "$ 149.900",
                        img: "https://placehold.co/404x210"
                    }
                ].map((item, idx) => (
                    <Card key={idx} className="w-full">
                        <img src={item.img} alt={item.title} className="rounded-t-lg w-full h-52 object-cover" />
                        <CardContent className="p-4 space-y-2">
                            <div className="text-2xl font-medium">{item.title}</div>
                            <div className="text-muted-foreground text-lg">{item.description}</div>
                            <div className="text-xl font-bold">{item.price}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Footer */}
            <footer className="mt-20 w-full border-t pt-10 pb-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                <div>
                    <div className="text-2xl mb-4">Site name</div>
                    <div className="flex space-x-3 mt-4">
                        {[1, 2, 3, 4].map(i => (
                            <Button key={i} variant="ghost" size="icon" className="rounded-sm w-10 h-10">
                                <span className="sr-only">Social {i}</span>
                                <div className="w-6 h-6 bg-muted rounded"></div>
                            </Button>
                        ))}
                    </div>
                </div>

                {[1, 2, 3].map((col, i) => (
                    <div key={i} className="space-y-2 text-right">
                        <div className="font-semibold">Topic</div>
                        <div className="text-muted-foreground">Page</div>
                        <div className="text-muted-foreground">Page</div>
                        <div className="text-muted-foreground">Page</div>
                    </div>
                ))}
            </footer>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}
