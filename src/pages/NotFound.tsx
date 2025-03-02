
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import ThreeScene from "@/components/ThreeScene";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10">
        <ThreeScene minimalScene={true} showControls={false} />
      </div>
      
      <div className="glass-card p-12 max-w-md text-center animate-fade-in">
        <h1 className="text-6xl font-medium mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 py-3 px-6 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all interactive-element"
        >
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
