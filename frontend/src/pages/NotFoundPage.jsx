import { Link } from "react-router";
import { HomeIcon, SearchIcon, ArrowLeftIcon } from "lucide-react";
import Footer from "../components/Footer";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="size-24 sm:size-32 rounded-full bg-primary/10 flex items-center justify-center animate-fade-in">
            <SearchIcon className="size-12 sm:size-16 text-primary" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/" className="btn btn-primary btn-lg gap-2 w-full sm:w-auto">
            <HomeIcon className="size-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-lg gap-2 w-full sm:w-auto"
          >
            <ArrowLeftIcon className="size-5" />
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 card bg-base-100 shadow-xl border border-base-300/50">
          <div className="card-body">
            <h3 className="font-bold text-lg mb-2">Need Help?</h3>
            <p className="text-sm text-base-content/70">
              If you believe this is an error, please contact support or try navigating from the homepage.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default NotFoundPage;