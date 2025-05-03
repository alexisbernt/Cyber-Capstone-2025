import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link href="/">
        <button className="px-6 py-3 text-lg font-semibold bg-primary hover:bg-primary/80 transition rounded-lg">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
