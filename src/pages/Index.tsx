// Legacy single-page version - redirects to new structure
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to new home page structure
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default Index;
