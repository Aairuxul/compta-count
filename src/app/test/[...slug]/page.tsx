"use client";

import NotFound from '@/app/not-found';
import { useParams } from 'next/navigation';

export default function TestId() {
    const params = useParams();
    const slug = params.slug as string[];

    if (!slug || !Array.isArray(slug) || slug.length === 0) {
      return NotFound();
    }

    return (
      <div className="flex min-h-screen flex-col flex-1 items-center justify-center bg-transparent font-sans text-[var(--foreground)]">
        <div className="flex flex-col flex-1 items-center justify-center">
          <p>Affiche l'id test de la page : {slug[slug.length - 1]}</p>
          <pre className="mt-4 p-4 bg-gray-100 rounded text-sm text-black">
            Toute la partie slug :
            {JSON.stringify(slug, null, 2)}
          </pre>
        </div>
      </div>
    );
}