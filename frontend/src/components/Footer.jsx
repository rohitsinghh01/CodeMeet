import { Link } from "react-router";
import { Code2Icon, GithubIcon, TwitterIcon, LinkedinIcon, MailIcon, HeartIcon } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 hover:scale-105 transition-transform duration-200 w-fit">
              <div className="size-10 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                <Code2Icon className="size-6 text-white" />
              </div>
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
                CodeMeet
              </span>
            </Link>
            <p className="text-base-content/70 mb-4 max-w-md">
              The ultimate platform for technical hiring. Conduct seamless remote coding interviews with real-time collaboration.
            </p>
            <div className="flex items-center gap-2 text-sm text-base-content/60">
              <span>Built with</span>
              <HeartIcon className="size-4 text-error fill-error animate-pulse" />
              <span>by</span>
              <a
                href="https://github.com/rohitsinghh01"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Rohit
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base-content mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-base-content/70 hover:text-primary transition-colors">
                  Dashboard
                </Link>
                </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-base-content mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/rohitsinghh01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors"
              >
                <GithubIcon className="size-5" />
                <span>GitHub</span>
              </a>
              
              <a
                href="mailto:singh.rohitraj122@gmail.com"
                className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors"
              >
                <MailIcon className="size-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-base-300">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-base-content/60 text-center sm:text-left">
              © {currentYear} CodeMeet. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-base-content/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-base-content/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;