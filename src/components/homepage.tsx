import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import DifficultySelector from "./DifficultySelector";
import { faqs, testimonials, whyChoose } from "@/lib/constants";
import { auth } from "@/auth";
import { SignIn } from "./sign-in";

export default async function HomePage() {
  const session = await auth();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Master Sudoku with Sudoken
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Challenge yourself with our adaptive Sudoku puzzles. Perfect for
            beginners and experts alike.
          </p>
          {session?.user ? (
            <Link
              className={buttonVariants({ className: "text-lg px-8 py-6" })}
              href={"/play"}>
              Start Playing Now
            </Link>
          ) : (
            <SignIn
              className={buttonVariants({
                variant: "default",
                className: "text-lg px-8 py-6",
              })}>
              Login To play
            </SignIn>
          )}
        </section>

        {/* Feature Highlights */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800 dark:text-white">
            Why Choose Sudoken?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((feature, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <feature.icon className="mx-auto h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
            Choose Your Challenge
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sudoken offers Sudoku puzzles for all skill levels. Select your
            difficulty and start solving!
          </p>
        </section>
        {session?.user ? <DifficultySelector /> : null}

        {/* Testimonials */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800 dark:text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-none shadow-lg">
                <CardContent className="p-6">
                  <StarIcon className="h-6 w-6 text-yellow-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &apos;{testimonial.comment}&apos;
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
            Ready to Challenge Yourself?
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join millions of Sudoku enthusiasts and start your journey to
            becoming a Sudoku master today!
          </p>
          {session?.user ? (
            <Link href={"/play"}>
              <Button size="lg" className="text-lg px-8 py-6">
                Lets Play
              </Button>
            </Link>
          ) : (
            <Button size="lg" className="text-lg px-8 py-6">
              Login To Join
            </Button>
          )}
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Sudoken
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mastering Sudoku, one puzzle at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Support
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover:text-blue-500">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:text-blue-500">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Connect
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
            <p>© 2024 Sudoken. All rights reserved. Made by Shivam with help from AI and his friend Reenav .</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
