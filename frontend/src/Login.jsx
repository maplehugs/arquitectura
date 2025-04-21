// App.tsx
"use client"

import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Checkbox} from "@/components/ui/checkbox"
import React from "react";

const formSchema = z.object({
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
    remember: z.boolean().optional(),
})

export default function App() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    })

    const onSubmit = (values) => {
        console.log(values)
        // Handle form submission logic here
    }

    return (
        <div className="flex min-h-screen">
            {/* Left Section: Form */}
            <div className="flex flex-col justify-center items-center w-1/2 p-8">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-between">
                            <FormField
                                control={form.control}
                                name="remember"
                                render={({field}) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm">Remember me</FormLabel>
                                    </FormItem>
                                )}
                            />
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                <Link to="/recover-password">Forgot password?</Link>
                            </a>
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
                <p className="text-center text-sm mt-4">
                    <Link to="/register">
                        <button>Don't have an account?{" "}</button>
                    </Link>
                </p>

                <p className="text-center text-sm mt-4">
                    <Link to="/">
                        <button>Back to Menu{" "}</button>
                    </Link>
                </p>

            </div>

            {/* Right Section: Image */}

            <div className="w-1/2">
                <img
                    src="https://placehold.co/713x1024"
                    alt="Login Illustration"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}
