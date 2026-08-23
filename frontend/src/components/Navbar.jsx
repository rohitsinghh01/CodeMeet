import { Link, useLocation } from "react-router";
import { BookOpenIcon, Code2Icon, LayoutDashboardIcon, MailIcon, MenuIcon, XIcon, MessageCircleCode } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import ThemeSelector from "./ThemeSelector";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-base-100/95 backdrop-blur-lg border-b border-primary/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="size-9 sm:size-10 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg animate-gradient">
              <MessageCircleCode className="size-5 sm:size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-base sm:text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                CodeMeet
              </span>
              <span className="text-[10px] sm:text-xs text-base-content/60 font-medium -mt-1 hidden sm:block">Technical Interview Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to={"/problems"}
              className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive("/problems")
                  ? "bg-primary text-primary-content shadow-lg"
                  : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
              }`}
            >
              <div className="flex items-center gap-x-2.5">
                <BookOpenIcon className="size-4" />
                <span className="font-medium">Problems</span>
              </div>
            </Link>

            <Link
              to="/inbox"
              className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive("/inbox")
                  ? "bg-primary text-primary-content shadow-lg"
                  : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
              }`}
            >
              <div className="flex items-center gap-x-2.5">
                <MailIcon className="size-4" />
                <span className="font-medium">Inbox</span>
              </div>
            </Link>

            <Link
              to="/dashboard"
              className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive("/dashboard")
                  ? "bg-primary text-primary-content shadow-lg"
                  : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
              }`}
            >
              <div className="flex items-center gap-x-2.5">
                <LayoutDashboardIcon className="size-4" />
                <span className="font-medium">Dashboard</span>
              </div>
            </Link>

            <div className="flex items-center gap-2 ml-2">
              <ThemeSelector />
              <UserButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSelector />
            <UserButton />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost btn-circle"
            >
              {mobileMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-base-100/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/problems"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive("/problems")
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              <BookOpenIcon className="size-5" />
              <span className="font-medium">Problems</span>
            </Link>
            <Link
              to="/inbox"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive("/inbox")
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              <MailIcon className="size-5" />
              <span className="font-medium">Inbox</span>
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive("/dashboard")
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              <LayoutDashboardIcon className="size-5" />
              <span className="font-medium">Dashboard</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;