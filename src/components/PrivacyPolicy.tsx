import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <ScrollArea className="h-[60vh] border rounded-md p-4">
        <div className="space-y-4">
          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support. This may include your name, email address, gameplay data, and any other information you choose to provide.</p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>We use the information we collect to operate, maintain, and improve Sudoken. This includes personalizing your experience, tracking your progress, providing customer support, and communicating important updates regarding the app.</p>
          </section>

          {/* Sharing of Information */}
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
            <p>We do not sell or rent your personal information to third parties. However, we may share your data with trusted service providers to help us operate the app. We may also share anonymized or aggregated information for research or analytical purposes.</p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p>We implement industry-standard security measures to safeguard your personal information. Despite our efforts, please note that no method of electronic transmission or storage is entirely secure, and we cannot guarantee absolute data security.</p>
          </section>

          {/* Your Choices */}
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Your Choices and Control</h2>
            <p>You have control over your personal information. You can access, update, or delete your account information through your account settings. Additionally, you may request that we delete your account and any associated data by contacting us directly.</p>
          </section>

          {/* Cookies and Similar Technologies */}
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to improve your experience, monitor usage, and understand user preferences. You can control cookies through your browser settings. However, disabling cookies may limit certain functionalities of the app.</p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Children's Privacy</h2>
            <p>Sudoken is not directed toward individuals under the age of 13, and we do not knowingly collect personal information from children under this age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to remove that information.</p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
            <p>We may modify or update this Privacy Policy from time to time. Any changes will be reflected on this page, and we will update the "Last Updated" date accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your data.</p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy or your data, please reach out to us at <a href="mailto:privacy@sudoken.com" className="underline">privacy@sudoken.com</a>.</p>
          </section>

          {/* Last Updated */}
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
