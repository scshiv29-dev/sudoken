import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <ScrollArea className="h-[60vh] border rounded-md p-4">
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>Welcome to Sudoken. By accessing or using our application (&ldquo;the app&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree with any part of these Terms, you must discontinue use of the app immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
            <p>You must be at least 13 years old to use Sudoken. By using the app, you represent that you meet this age requirement. If you are under 18, you may use the app only with the involvement of a parent or legal guardian.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
            <p>To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and are fully responsible for all activities that occur under your account. You agree to notify us immediately if you suspect any unauthorized use of your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Acceptable Use</h2>
            <p>You agree not to use the app in any way that violates applicable laws, infringes upon the rights of others, or interferes with the operation of the app. This includes but is not limited to unauthorized access, distributing malware, and harassment of other users.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
            <p>All content, trademarks, and materials available on the app, including but not limited to text, graphics, logos, and code, are the property of Sudoken or its licensors and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works based on the app&apos;s content without express permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. User-Generated Content</h2>
            <p>If you submit content (such as comments, media, or other user-generated content) to Sudoken, you grant us a non-exclusive, royalty-free, perpetual license to use, modify, and display that content in connection with the app. You represent that you own or have the necessary rights to submit such content and that it does not infringe on the rights of any third party.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Third-Party Links and Services</h2>
            <p>Sudoken may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party services, and you agree that your use of those services is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Termination of Use</h2>
            <p>We may suspend or terminate your account or access to the app at any time, for any reason, including but not limited to violating these Terms. Upon termination, all rights granted to you under these Terms will cease immediately, and you must stop using the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Disclaimer of Warranties</h2>
            <p>The app is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties or representations of any kind, whether express or implied, regarding the operation or availability of the app, or the accuracy of the information provided.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Limitation of Liability</h2>
            <p>In no event shall Sudoken, its affiliates, or its licensors be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or relating to your use of the app, even if we have been advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Any changes will be posted on this page, and by continuing to use the app after the changes are posted, you agree to be bound by the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">12. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">13. Contact Information</h2>
            <p>If you have any questions or concerns about these Terms, you can contact us at <a href="mailto:support@sudoken.com" className="underline">support@sudoken.com</a>.</p>
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