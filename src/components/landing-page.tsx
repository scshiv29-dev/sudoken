import Navbar from "./navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Grid3X3Icon, TrophyIcon, BrainIcon, ZapIcon, SmartphoneIcon, BarChartIcon, ClockIcon, StarIcon } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
    

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">Master Sudoku with Sudoken</h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Challenge yourself with our adaptive Sudoku puzzles. Perfect for beginners and experts alike.
          </p>
          <Link href={"/play"}>  
          <Button size="lg" className="text-lg px-8 py-6">Start Playing Now</Button>
          </Link>
        </section>

        {/* Feature Highlights */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800 dark:text-white">Why Choose Sudoken?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ZapIcon, title: "Adaptive Difficulty", description: "Puzzles that grow with your skills" },
              { icon: SmartphoneIcon, title: "Play Anywhere", description: "Available on all your devices" },
              { icon: BarChartIcon, title: "Track Progress", description: "Monitor your improvement over time" },
              { icon: ClockIcon, title: "Time Challenges", description: "Test your speed and accuracy" },
            ].map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <feature.icon className="mx-auto h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Difficulty Levels */}
        <section className="py-20 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800 dark:text-white">Choose Your Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Easy", icon: ZapIcon, color: "bg-green-100 dark:bg-green-900", textColor: "text-green-700 dark:text-green-300" },
              { title: "Medium", icon: BrainIcon, color: "bg-yellow-100 dark:bg-yellow-900", textColor: "text-yellow-700 dark:text-yellow-300" },
              { title: "Hard", icon: TrophyIcon, color: "bg-red-100 dark:bg-red-900", textColor: "text-red-700 dark:text-red-300" },
            ].map((level) => (
              <Card key={level.title} className={`${level.color} border-none shadow-lg hover:shadow-xl transition-shadow`}>
                <CardContent className="p-6 text-center">
                  <level.icon className={`mx-auto h-12 w-12 ${level.textColor} mb-4`} />
                  <h3 className={`text-xl font-semibold mb-2 ${level.textColor}`}>{level.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800 dark:text-white">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex", comment: "Sudoken has dramatically improved my Sudoku skills. The adaptive difficulty is a game-changer!" },
              { name: "Sam", comment: "I love how I can play on my phone or tablet. It's perfect for my daily commute." },
              { name: "Jordan", comment: "The UI is so clean and intuitive. It makes solving Sudoku puzzles a joy." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-none shadow-lg">
                <CardContent className="p-6">
                  <StarIcon className="h-6 w-6 text-yellow-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold text-gray-800 dark:text-white">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800 dark:text-white">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {[
              { question: "Is Sudoken free to play?", answer: "Yes, Sudoken offers a free version with limited puzzles. We also have a premium version with additional features and unlimited puzzles." },
              { question: "Can I play offline?", answer: "Once you've downloaded the app, you can play puzzles offline. Your progress will sync when you're back online." },
              { question: "How often are new puzzles added?", answer: "We add new puzzles daily to keep the challenge fresh and exciting for our users." },
              { question: "Is there a leaderboard?", answer: "Yes, we have global and friend leaderboards so you can compete with Sudoku enthusiasts worldwide or just with your friends." },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">Ready to Challenge Yourself?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join millions of Sudoku enthusiasts and start your journey to becoming a Sudoku master today!
          </p>
          <Button size="lg" className="text-lg px-8 py-6">Join Sudoken Now</Button>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Sudoken</h3>
              <p className="text-gray-600 dark:text-gray-300">Mastering Sudoku, one puzzle at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">Features</a></li>
                <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Connect</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
            <p>© 2023 Sudoken. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}