"use client";

import { useParams } from 'next/navigation';

export default function TestId() {
    const params = useParams();
    const id = params.id;

    return (
      <div className="flex min-h-screen flex-col flex-1 items-center justify-center bg-transparent font-sans text-[var(--foreground)]">
        <div className="flex flex-col flex-1 items-center justify-center">
          Affiche l'id de la page : {id}
        </div>
      </div>
    );
}