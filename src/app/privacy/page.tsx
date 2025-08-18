
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
            <Shield className="h-6 w-6 text-primary" /> Our Commitment to Your Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            At Avian Observer ("we," "us," or "our"), your privacy is a top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services (the "Services"). We’re committed to transparency, so we’ve kept this policy straightforward—because your trust matters to us.
          </p>

          <h2>Information We Collect</h2>
          <p>
            To provide you with the best experience, we collect certain information, including:
          </p>
          <p><strong>Information You Provide:</strong> When you create an account, log a bird sighting, or reach out for support, we may ask for details like your name, email address, location data, and any photos you upload.</p>
          <p><strong>Technical Data:</strong> We automatically gather some technical details (like your IP address and browser type) to ensure smooth operation and security.</p>
          

          <h2>How We Use Your Information</h2>
          <p>
            Your data helps us:
          </p>
          <ul>
            <li>✔ Deliver, enhance, and personalize your experience with our Services.</li>
            <li>✔ Power cool features like our AI Bird Identifier.</li>
            <li>✔ Communicate with you (like responding to your questions).</li>
            <li>✔ Analyze trends to improve our community and tools.</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We respect your privacy and never sell your personal data. However, in some cases, we may share information:
          </p>
          <ul>
              <li><strong>With Your Consent</strong> (if you choose to share sightings publicly).</li>
              <li><strong>With Trusted Service Providers</strong> (who help us operate securely).</li>
              <li><strong>For Legal Reasons</strong> (if required by law).</li>
          </ul>
          <p>
            Publicly shared sightings (photos and general locations) may appear in our community gallery or species maps—so fellow bird lovers can celebrate your discoveries!
          </p>

          <h2>Your Choices &amp; Control</h2>
          <p>
            You’re in charge! You can review, update, or delete your account anytime by logging in.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may occasionally update this policy to reflect changes in our Services or regulations. If we do, we’ll post the revised version here—so you’re always informed.
          </p>

          <h2>Got Questions?</h2>
          <p>
            We’re here to help! If you have any concerns about your privacy, reach out to us at privacy@avianobserver.com.
          </p>
          <p>
            Thanks for trusting Avian Observer—we’re honored to be part of your birding journey!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
