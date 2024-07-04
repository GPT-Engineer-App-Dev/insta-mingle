import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [feed, setFeed] = useState([
    { id: 1, username: "user1", timestamp: "2 hours ago", description: "Beautiful scenery", src: "/placeholder.svg" },
    { id: 2, username: "user2", timestamp: "5 hours ago", description: "Lovely sunset", src: "/placeholder.svg" },
    { id: 3, username: "user3", timestamp: "1 day ago", description: "Amazing architecture", src: "/placeholder.svg" },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      <div className="space-y-4">
        {feed.map(post => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg" alt="User" className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{post.username}</h3>
                  <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <img src={post.src} alt={post.description} className="w-full h-64 object-cover cursor-pointer mt-2" />
                </DialogTrigger>
                <DialogContent>
                  <Card>
                    <CardHeader>
                      <CardTitle>{post.description}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={post.src} alt={post.description} className="w-full h-auto object-cover" />
                    </CardContent>
                  </Card>
                </DialogContent>
              </Dialog>
              <div className="flex items-center space-x-4 mt-2">
                <Button variant="outline" size="sm">Like</Button>
                <Button variant="outline" size="sm">Comment</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;