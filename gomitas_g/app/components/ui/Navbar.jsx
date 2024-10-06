import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-24 py-6 text-lg bg--500">
      <div>Logo</div>

      {/* links */}
      <div className="flex gap-10">
        <a href="#">tyuiop</a>
        <a href="#">tyuiop</a>
        <a href="#">tyuiop</a>
      </div>
    </div>
  );
}
