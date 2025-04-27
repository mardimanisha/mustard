'use client'

import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils'; // utility to combine classes, optional
import { useState } from 'react';

export default function LazyImage({ className, ...props }: ImageProps) {
    const [loading, setLoading] = useState(true);

    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
            {...props}
            className={cn(
                'transition-opacity duration-500 ease-in-out',
                loading ? 'opacity-0' : 'opacity-100',
                className
            )}
            onLoad={() => setLoading(false)}
        />
    );
}
