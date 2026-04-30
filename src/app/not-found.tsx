import Link from "next/link";

export default function NotFound() {
  return (
    <div className="display-flex flex-col items-center justify-center h-screen">
      <span className="text-8xl font-extrabold text-gray-300 select-none">404</span>
      <h1 className="text-3xl font-bold">Page introuvable</h1>
      <p className="text-gray-400 text-center max-w-md">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}  