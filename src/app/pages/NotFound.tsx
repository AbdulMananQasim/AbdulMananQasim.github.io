import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, var(--navy-blue) 0%, var(--deep-navy) 100%)' }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-9xl font-bold mb-6" style={{ color: 'var(--accent-blue)' }}>
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4 text-white">Page Not Found</h2>
        <p className="text-xl mb-8" style={{ color: '#cbd5e1' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
            style={{ background: 'var(--accent-blue)', color: 'white' }}
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
