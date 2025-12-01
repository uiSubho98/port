import { EXPERIENCES } from "@/app/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A timeline of my roles, responsibilities, and accomplishments.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-1/2">
                <Card
                  className={`animate-fade-in-up bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 ${
                    index % 2 === 0 ? "mr-4" : "ml-4"
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="secondary" className="mb-2">{exp.year}</Badge>
                        <CardTitle className="font-headline text-2xl">{exp.role}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2 text-sm">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex">
                          <span className="text-primary mr-2">◆</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-background border-2 border-primary rounded-full p-2">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
