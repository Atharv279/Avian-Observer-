import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Your privacy is important to us.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" /> Our Commitment to Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            This Privacy Policy describes how Avian Observer ("we", "us", or "our") collects, uses, and shares information about you when you use our website and services (the "Services").
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, submit a bird sighting, or contact us for support. This may include your name, email address, location data, and any photos you upload. We also collect technical information automatically, such as your IP address and browser type.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our Services.</li>
            <li>Personalize your experience.</li>
            <li>Communicate with you, including responding to your inquiries.</li>
            <li>Power our AI Bird Identifier feature.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as described in this Privacy Policy, such as with your consent, with service providers who perform services for us, or for legal reasons. Sighting information, including photos and general location, may be shared publicly within our community gallery and species maps.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may review, update, or delete your account information at any time by logging into your account.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@avianobserver.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
