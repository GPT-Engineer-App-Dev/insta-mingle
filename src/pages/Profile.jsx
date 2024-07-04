import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Profile = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "/placeholder.svg", description: "Photo 1" },
    { id: 2, src: "/placeholder.svg", description: "Photo 2" },
    { id: 3, src: "/placeholder.svg", description: "Photo 3" },
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Profile" className="w-24 h-24 rounded-full object-cover" />
        <div>
          <h2 className="text-2xl font-bold">Username</h2>
          <p>Bio goes here...</p>
          <Button variant="outline" className="mt-2">Edit Profile</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {photos.map(photo => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <img src={photo.src} alt={photo.description} className="w-full h-32 object-cover cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
              <Card>
                <CardHeader>
                  <CardTitle>{photo.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={photo.src} alt={photo.description} className="w-full h-auto object-cover" />
                </CardContent>
              </Card>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Profile;