import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <Image
        src="/xpscreative.png"
        alt="XPS Creative Logo"
        width={100}
        height={23}
        priority
      />
    </div>
  );
}
