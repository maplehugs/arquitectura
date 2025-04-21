// RegisterForm.tsx
"use client"

import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
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
import {Link} from "react-router-dom";
import React from "react";

const formSchema = z.object({
    fullName: z.string().min(1, {message: "Full name is required"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
    confirmPassword: z.string().min(6, {message: "Confirm password must be at least 6 characters"}),
    remember: z.boolean().optional(),
})

export default function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
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
                <h1 className="text-2xl font-bold mb-6">Register</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full mt-4">Register</Button>
                    </form>
                </Form>

                <Button className="w-full mt-4">
                    <Link to="/login">
                        <button>Back to login?{" "}</button>
                    </Link>
                </Button>
            </div>

            {/* Right Section: Image */}
            <div className="w-1/2 bg-cover bg-center rounded-lg"
                 style={{backgroundImage: "url('https://placehold.co/713x1024')"}}/>
        </div>
    )
}
