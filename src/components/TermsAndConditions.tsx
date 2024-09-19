import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <ScrollArea className="h-[60vh] border rounded-md p-4">
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using Sudoken (&ldquo;the app&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of the app immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Permitted Use of the App</h2>
            <p>Sudoken is provided solely for personal, non-commercial use. You may not modify, reproduce, distribute, or commercially exploit any content, features, or parts of the app without prior written consent from us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. User Accounts and Responsibilities</h2>
            <p>To access certain features, you may be required to create a user account. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.</p>
            <p>If you suspect unauthorized access to your account, you must notify us immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Intellectual Property Rights</h2>
            <p>All content, including but not limited to text, graphics, code, and software, are the intellectual property of Sudoken or its licensors. Unauthorized use of such materials is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. User-Generated Content</h2>
            <p>By submitting any content (such as comments, suggestions, or media) to the app, you grant us a non-exclusive, royalty-free, perpetual license to use, modify, and distribute that content in connection with the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Prohibited Activities</h2>
            <p>Users agree not to engage in any activity that disrupts or interferes with the operation of the app, including but not limited to hacking, introducing malicious code, or unauthorized access to any part of the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Suspension and Termination</h2>
            <p>We reserve the right to suspend or terminate your account or access to Sudoken at any time, with or without notice, for violating these Terms and Conditions or engaging in harmful activities.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Disclaimer of Warranties</h2>
            <p>Sudoken is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties, express or implied, about the functionality or availability of the app, including any potential errors or interruptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
            <p>In no event shall Sudoken, its affiliates, or its operators be held liable for any direct, indirect, incidental, consequential, or punitive damages resulting from the use or inability to use the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Privacy and Data Protection</h2>
            <p>Your use of the app is subject to our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>, which outlines how we collect, use, and protect your personal data. By using the app, you consent to the practices outlined in the Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Changes to Terms and Conditions</h2>
            <p>We may modify these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically. Continued use of the app constitutes your acceptance of the updated terms.</p>
          </section>
        </div>
      </ScrollArea>
      <div className="mt-6 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
       
      </div>
    </div>
  );
}