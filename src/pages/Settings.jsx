import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SettingsPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle settings update logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};

export default SettingsPage;