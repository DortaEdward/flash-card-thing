import Image from "next/image";
import Header from "../_components/Header";
import Footer from "./_components/Footer";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Clock, BarChart, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master Any Subject with Spaced Repetition
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  MemoryMaster uses proven learning techniques to help you retain information longer and learn more efficiently.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why MemoryMaster?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Spaced Repetition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Review cards at optimal intervals to maximize retention and minimize study time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Visualize your learning progress and identify areas for improvement.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Collaborative Decks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Share and collaborate on decks with friends or study groups.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Smart Algorithm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Our AI-powered algorithm adapts to your learning pace for optimal results.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
