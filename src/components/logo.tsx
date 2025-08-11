import { Feather } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-bold font-headline text-lg', className)}>
      <Feather className="h-6 w-6 text-primary" />
      <span>Avian Observer</span>
    </div>
  );
}
