"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";
import Link from "next/link"


import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/HeaderNav";
import HeaderLogo from "@/components/HeaderLogo";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  company_size: z.enum([
    "Сніданок",
    "Обід",
    "Вечеря",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  company_size: "Сніданок" | "Обід" | "Вечеря";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      company_size: "Сніданок",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" w-full text-[#C72544]  md:items-center md:justify-center bg-[#F0E7DE] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <div className="flex w-full justify-center items-center py-2 font-bold text-2xl gap-x-3">
        <HeaderLogo />
        <Link href='/' >На головну</Link>
      </div>
      
      
      <div className="md:flex items-start justify-center md:py-20 px-6 ">
        <div className=" text-[#C72544]">
          <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#C72544] to-[#C72544] bg-opacity-50">
            Ваші побажання            
          </div>
          <div
            className="
              
              py-4
              text-[#C72544]
                    "
          >
            Напишіть які рецепти Ви хотіли б побачити? 
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col border border-[#C72544]">
            <div className="flex gap-4">
              <div className=" font-normal pb-4 ">
                Можете використати цей сайт як записник і мати завжди при собі
                колекцію самих вдалих рецептів
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                Для цього необхідно лише направити повідомлення
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 ">
                І в ньому вказати назву рецепту, посилання на нього в Інтернеті
                або сам рецепт.
              </div>
            </div>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
            space-y-4
            h-full
            border border-[#C72544]
            text-[#C72544]
            rounded-3xl p-10
            md:w-1/3
            "
            >
              <div className="md:flex items-center gap-6 text-[#C72544]">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm ">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm ">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm ">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm ">
                      Company name?
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_size"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm ">
                      У якій рубриці ?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Обери рубрику" className="text-[#C72544]" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="text-[#C72544]">
                        <div className="flex gap-4 ">
                          <SelectItem value="Сніданок">Сніданок</SelectItem>
                        </div>
                        <SelectItem value="Обід">Обід</SelectItem>
                        <SelectItem value="Вечеря">Вечеря</SelectItem>
                        
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm ">
                      Що записати?
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox
                    className="
                outline
                border
                text-sm
                font-light
                
                "
                  />
                </div>
                <div className="text-xs font-light  md:w-3/4 mb-1 ">
                  Я хочу побачити мій рецепт на цьому сайті
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <Button
                  type="submit"
                  className="
                            text-sm
                            font-light
                            border
                            border-[#C72544]
                            "
                  disabled={loading}
                  onClick={() => form.handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div
                className="
        text-xl 
        
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        

 
        px-8

        "
              >
                <div className="w-80 py-20">
                  <PiSmiley className="text-6xl text-[#C72544] mx-auto" />

                  <div className="text-[#C72544] font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you
                    via email shortly.
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}
