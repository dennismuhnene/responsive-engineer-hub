import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

interface ClerkWrapperProps {
  children: React.ReactNode;
}

// Fallback component for when Clerk is not configured
const ClerkFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="bg-card p-8 rounded-xl border shadow-lg max-w-md w-full mx-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Admin Setup Required</h2>
        <p className="text-muted-foreground mb-4">
          Please configure your Clerk environment variables to access the admin panel.
        </p>
        <p className="text-sm text-muted-foreground">
          Copy .env.example to .env and add your VITE_CLERK_PUBLISHABLE_KEY
        </p>
      </div>
    </div>
  </div>
);

export const ClerkWrapper = ({ children }: ClerkWrapperProps) => {
  if (!CLERK_PUBLISHABLE_KEY) {
    return <ClerkFallback />;
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
};