import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link 
              to="/"
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Joseph Murithi
            </Link>
            <span className="text-sm text-muted-foreground">Admin Panel</span>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;