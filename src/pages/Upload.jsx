import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const UploadPage = () => {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle photo upload logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload Photo</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <Input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} />
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
};

export default UploadPage;