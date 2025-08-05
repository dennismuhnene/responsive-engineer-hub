import { useUser, SignInButton, SignOutButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Shield, LogOut } from "lucide-react";

const AUTHORIZED_USER_ID = "user_your_authorized_user_id_here";

interface AdminAuthProps {
  children: React.ReactNode;
}

export const AdminAuth = ({ children }: AdminAuthProps) => {
  const { user, isSignedIn } = useUser();

  const isAuthorized = isSignedIn && user?.id === AUTHORIZED_USER_ID;

  if (!isSignedIn) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-card p-8 rounded-xl border shadow-lg max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Admin Access Required</h2>
            <p className="text-muted-foreground">
              Please sign in with an authorized account to manage projects.
            </p>
          </div>
          <SignInButton mode="modal">
            <Button className="w-full">Sign In</Button>
          </SignInButton>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-card p-8 rounded-xl border shadow-lg max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <Shield className="mx-auto h-12 w-12 text-destructive mb-4" />
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p className="text-muted-foreground mb-4">
              You don't have permission to access the admin panel.
            </p>
            <p className="text-sm text-muted-foreground">
              Signed in as: {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>
          <SignOutButton>
            <Button variant="outline" className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </SignOutButton>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export const AdminButton = () => {
  const { user, isSignedIn } = useUser();
  const isAuthorized = isSignedIn && user?.id === AUTHORIZED_USER_ID;

  if (!isAuthorized) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <SignOutButton>
        <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
          <LogOut className="mr-2 h-4 w-4" />
          Admin Logout
        </Button>
      </SignOutButton>
    </div>
  );
};