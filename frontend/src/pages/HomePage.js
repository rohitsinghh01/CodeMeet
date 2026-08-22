import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
      {/* NAVBAR */}
      <nav className="bg-base-100/95 backdrop-blur-lg border-b border-primary/30 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to={"/"}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <Code2Icon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                CodeMeet
              </span>
              <span className="text-xs text-base-content/60 font-medium -mt-1">Connect. Code. Get Hired.</span>
            </div>
          </Link>

          {/* AUTH BTN */}
          <SignInButton mode="modal">
            <button className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            <div className="badge badge-primary badge-lg shadow-md">
              <ZapIcon className="size-4" />
              Real-time Collaboration
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                 Your
              </span>
              <br />
              <span className="text-base-content">Remote Interviews</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-xl">
              The ultimate platform for technical hiring. Conduct seamless remote coding interviews with real-time collaboration, video chat, and an integrated IDE.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="badge badge-md sm:badge-lg badge-outline">
                <CheckIcon className="size-3 sm:size-4 text-success" />
                Live Video Chat
              </div>
              <div className="badge badge-md sm:badge-lg badge-outline">
                <CheckIcon className="size-3 sm:size-4 text-success" />
                Code Editor
              </div>
              <div className="badge badge-md sm:badge-lg badge-outline">
                <CheckIcon className="size-3 sm:size-4 text-success" />
                Multi-Language
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-md sm:btn-lg w-full sm:w-auto">
                  Start Coding Now
                  <ArrowRightIcon className="size-4 sm:size-5" />
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-md sm:btn-lg w-full sm:w-auto">
                <VideoIcon className="size-4 sm:size-5" />
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="stats stats-vertical sm:stats-horizontal bg-base-100 shadow-xl border border-base-300/50 w-full">
              <div className="stat">
                <div className="stat-value text-primary">10K+</div>
                <div className="stat-title">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value text-secondary">50K+</div>
                <div className="stat-title">Sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value text-accent">99.9%</div>
                <div className="stat-title">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="/hero.png"
            alt="Remote Interview Platform"
            className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-primary/10 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Everything You Need to <span className="text-primary font-mono">Succeed</span>
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless and productive
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-base-300/50 hover:border-primary/40">
            <div className="card-body items-center text-center p-6 sm:p-8">
              <div className="size-14 sm:size-16 bg-primary/15 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                <VideoIcon className="size-7 sm:size-8 text-primary" />
              </div>
              <h3 className="card-title text-base sm:text-lg">HD Video Call</h3>
              <p className="text-sm sm:text-base text-base-content/70">
                Crystal clear video and audio for seamless communication during interviews
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-base-300/50 hover:border-secondary/40">
            <div className="card-body items-center text-center p-6 sm:p-8">
              <div className="size-14 sm:size-16 bg-secondary/15 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                <Code2Icon className="size-7 sm:size-8 text-secondary" />
              </div>
              <h3 className="card-title text-base sm:text-lg">Live Code Editor</h3>
              <p className="text-sm sm:text-base text-base-content/70">
                Collaborate in real-time with syntax highlighting and multiple language support
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-base-300/50 hover:border-accent/40 sm:col-span-2 lg:col-span-1">
            <div className="card-body items-center text-center p-6 sm:p-8">
              <div className="size-14 sm:size-16 bg-accent/15 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                <UsersIcon className="size-7 sm:size-8 text-accent" />
              </div>
              <h3 className="card-title text-base sm:text-lg">Easy Collaboration</h3>
              <p className="text-sm sm:text-base text-base-content/70">
                Share your screen, discuss solutions, and learn from each other in real-time
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
export default HomePage;