import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Contact Us</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          We'd love to hear from you. Reach out with questions, feedback, or inquiries.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Get in Touch</CardTitle>
          <CardDescription>
            You can reach us through the following channels. We'll do our best to respond promptly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">For general inquiries, support, and feedback.</p>
              <a href="mailto:atharvpatil269@gmail.com" className="text-primary hover:underline">
                atharvpatil269@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-muted-foreground">Our phone lines are open during business hours.</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Mailing Address</h3>
              <p className="text-muted-foreground">123 Aviary Avenue, Birdland, CA 98765</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
