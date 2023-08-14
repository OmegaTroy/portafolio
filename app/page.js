'use client'
import AbstractBackground from "@/components/AbstractBackground";
import { HomePages } from "@/components/HomePages";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-full w-full">
      <AbstractBackground/>
      <HomePages/>
      <ProjectCard/>
    </main>
  )
}
