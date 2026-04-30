"use client";

import { useEffect } from "react";

interface UsersErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function UsersError({ error, reset }: UsersErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8 bg-[var(--background)] text-[var(--foreground)]">
      <span className="text-7xl select-none">👤</span>
      <h2 className="text-2xl font-bold">Erreur dans la section Utilisateurs</h2>
      <p className="text-gray-400 text-center max-w-md">
        Impossible de charger les données utilisateurs. Vérifiez votre connexion
        ou réessayez dans quelques instants.
      </p>
      {error.message && (
        <pre className="text-xs text-red-400 bg-gray-900 rounded-lg px-4 py-2 max-w-lg overflow-auto">
          {error.message}
        </pre>
      )}
      <button
        onClick={reset}
        className="mt-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors cursor-pointer"
      >
        Réessayer
      </button>
    </div>
  );
}
