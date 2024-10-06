import React from "react";
import {Button} from "@nextui-org/react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-24 py-6 text-lg bg--500">
      <div>Logo</div>

      {/* links */}
      <div className="flex gap-10 text-white">
        <a href="#">tyuiop</a>
        <a href="#">tyuiop</a>
        <a href="#">tyuiop</a>
        <Button className="text-white hover:text-black rounded-full px-8"  variant="ghost">
        Login
      </Button>  
      </div>
    </div>
  );
}
 