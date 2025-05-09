
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  const initials = author.split(' ').map(name => name[0]).join('').toUpperCase();
  
  return (
    <Card className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-elevator-blue text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <blockquote className="italic text-gray-700">"{quote}"</blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
