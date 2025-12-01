import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
          &copy; {currentYear} Subhojit Dutta. 
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/uiSubho98" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>

        </div>
      </div>
    </footer>
  );
}
