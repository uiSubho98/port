import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 text-center md:text-left animate-fade-in-up">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4">
            <span className="text-muted-foreground">Hi, I'm a</span><br />
            <span className="text-primary">MERN Stack</span> Developer
          </h1>
          <div className="mb-6">
            <p className="text-lg md:text-xl text-muted-foreground overflow-hidden whitespace-nowrap animate-typing border-r-4 border-r-primary">
              Crafting robust and beautiful web applications.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <Button asChild size="lg" className="text-lg py-6 px-8">
              <a href="#projects">View My Work <ArrowDown className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in-up" style={{animationDelay: "0.4s"}}>
          <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/50 glow-shadow">
            <AvatarImage src="https://i.ibb.co/xKS5PvSV/1672998893608.jpg" alt="Profile picture" data-ai-hint="professional portrait" />
            <AvatarFallback>CC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
