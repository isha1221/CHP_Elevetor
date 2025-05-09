
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  learnMoreLink: string;
}

const ServiceCard = ({ title, description, icon: Icon, learnMoreLink }: ServiceCardProps) => {
  return (
    <Card className="service-card h-full flex flex-col">
      <CardHeader>
        <div className="service-icon">
          <Icon size={36} />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={learnMoreLink}>Learn More</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
