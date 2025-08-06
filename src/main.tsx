import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Fallback component for when Clerk is not configured
const FallbackApp = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="bg-card p-8 rounded-xl border shadow-lg max-w-md w-full mx-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Setup Required</h2>
        <p className="text-muted-foreground mb-4">
          Please configure your environment variables to get started.
        </p>
        <p className="text-sm text-muted-foreground">
          Copy .env.example to .env and fill in your keys.
        </p>
      </div>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {CLERK_PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    ) : (
      <FallbackApp />
    )}
  </React.StrictMode>
);
