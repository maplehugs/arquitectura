"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import ReCAPTCHA from "react-google-recaptcha"
import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import {Link} from "react-router-dom";

const formSchema = z.object({
    email: z.string().email({ message: "Dirección de correo inválida" }),
})

export default function RecoverPassword() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    const [captchaValue, setCaptchaValue] = useState(null)
    const [error, setError] = useState(false) // State to track CAPTCHA completion error

    // Handle the ReCAPTCHA response change
    function onChange(value) {
        console.log("Captcha value:", value)
        setCaptchaValue(value)
        setError(false) // Reset error when CAPTCHA is changed
    }

    const onSubmit = (values) => {
        if (!captchaValue) {
            setError(true) // Show error if CAPTCHA not completed
            return
        }
        console.log(values)
        // Lógica para recuperar la contraseña aquí
    }

    return (
        <div className="flex min-h-screen">
            {/* Sección izquierda: formulario */}
            <div className="flex flex-col justify-center items-center w-1/2 p-8">
                <h1 className="text-2xl font-bold mb-6">Recuperar Contraseña</h1>

                {/* Show error alert if CAPTCHA is not completed */}
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            You must complete the CAPTCHA before submitting the form.
                        </AlertDescription>
                    </Alert>
                )}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo Electrónico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email@ejemplo.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <ReCAPTCHA
                            sitekey="6Leh_x4rAAAAAFFB9XPC3AS5xVUgNxt6cD7rc5Ip"
                            onChange={onChange}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!captchaValue} // Disable if CAPTCHA not completed
                        >
                            Recuperar
                        </Button>
                    </form>
                </Form>
                <Button className="w-full mt-4">
                    <Link to="/login">
                        <button>Back to login?{" "}</button>
                    </Link>
                </Button>
            </div>

            {/* Sección derecha: imagen */}
            <div className="w-1/2">
                <img
                    src="https://placehold.co/713x1024"
                    alt="Ilustración de recuperación"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}
