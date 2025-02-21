import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  instructor: string
  duration: string
  level: string
}

export default function CourseCard({ title, instructor, duration, level }: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-1">{instructor}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <p className="text-sm text-muted-foreground">Duration: {duration}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Badge variant="secondary">{level}</Badge>
      </CardFooter>
    </Card>
  )
}

