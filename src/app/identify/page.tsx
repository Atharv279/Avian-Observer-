import { IdentifierForm } from './identifier-form';
import { Bot } from 'lucide-react';

export default function IdentifyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-3 mb-4">
          <Bot className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold font-headline">AI Bird Identifier</h1>
        <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
          Not sure what you saw? Upload a photo and provide the location to get an AI-powered identification suggestion.
        </p>
      </header>
      <IdentifierForm />
    </div>
  );
}
