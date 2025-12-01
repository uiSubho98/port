import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: ImagePlaceholder;
  githubUrl: string;
  liveUrl: string;
  animationDelay: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  animationDelay,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay }}>
      <div className="relative w-full h-48">
        <Image
          src={image.imageUrl}
          alt={image.description}
          data-ai-hint={image.imageHint}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="ghost" size="icon" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${title}`}>
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
