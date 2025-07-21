import { Card, CardContent, CardHeader } from '@microfrontends/ui'

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="flex flex-col animate-pulse">
          <CardHeader>
            <div className="aspect-square bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex items-center justify-between">
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}