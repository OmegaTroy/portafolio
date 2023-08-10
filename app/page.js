'use client'
import AbstractBackground from "@/components/AbstractBackground";
import { HomePages } from "@/components/HomePages";

export default function Home() {
  return (
    <main className="h-full w-full">
      <AbstractBackground/>
      <HomePages/>
    </main>
  )
}
