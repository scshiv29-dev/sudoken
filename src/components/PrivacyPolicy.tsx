'use client'

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export function PrivacyPolicyComponent() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <ScrollArea className="h-[60vh] border rounded-md p-4">
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support. This may include your name, email address, and gameplay statistics.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>We use the information we collect to operate and improve Sudoken, including to personalize your experience, track your progress, and provide customer support.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
            <p>We do not share your personal information with third parties except as described in this policy. We may share anonymous or aggregated information for analytical purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p>We implement reasonable security measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Your Choices</h2>
            <p>You can access and update certain information about you from within your Sudoken account settings. You may also request that we delete your account and associated data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Cookies and Similar Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our app and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Children&apos;s Privacy</h2>
            <p>Sudoken is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we may have collected information about a child, please contact us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated&rdquo; date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@sudoken.com.</p>
          </section>

          <p className="mt-6 text-sm text-gray-600">Last Updated: [Current Date]</p>
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