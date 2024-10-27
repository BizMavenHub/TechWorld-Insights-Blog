import { PolicySection } from "@/components/privacy_policy/PrivacySection";

// Components
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default function page() {
  return (
    <>
      <NavbarComponent />
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted">Last updated: October 27, 2024</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <PolicySection title="Introduction">
              <p>
                At TechWorld, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website. Please read this
                privacy policy carefully. If you do not agree with the terms of
                this privacy policy, please do not access the site.
              </p>
            </PolicySection>

            <PolicySection title="Information We Collect">
              <p>
                We collect information that you voluntarily provide to us when
                you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Register for an account</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us through our contact form</li>
                <li>Leave comments on our articles</li>
                <li>Participate in our community forums</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, and any
                other information you choose to provide.
              </p>
            </PolicySection>

            <PolicySection title="How We Use Your Information">
              <p>
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze usage patterns</li>
                <li>
                  Protect against, identify, and prevent fraud and other illegal
                  activities
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Cookies and Tracking Technologies">
              <p>
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. Cookies
                are files with small amount of data which may include an
                anonymous unique identifier.
              </p>
              <p className="mt-4">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                website.
              </p>
            </PolicySection>

            <PolicySection title="Data Security">
              <p>
                We implement appropriate technical and organizational security
                measures to protect the security of your personal information.
                However, please note that no method of transmission over the
                Internet or method of electronic storage is 100% secure.
              </p>
            </PolicySection>

            <PolicySection title="Third-Party Services">
              <p>
                Our website may contain links to third-party websites and
                services. We have no control over, and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </p>
            </PolicySection>

            <PolicySection title="Children's Privacy">
              <p>
                Our website is not intended for children under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and you are aware that
                your child has provided us with personal information, please
                contact us.
              </p>
            </PolicySection>

            <PolicySection title="Changes to This Privacy Policy">
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy.
              </p>
              <p className="mt-4">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </PolicySection>

            <PolicySection title="Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>By email: privacy@techworld.com</li>
                <li>
                  By visiting our contact page:{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </PolicySection>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
