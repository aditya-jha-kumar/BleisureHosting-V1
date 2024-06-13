import React from "react";

export default function Search() {
  return (
    <div className="flex border-black items-center space-x-2 border rounded-2xl w-72 h-10">
      <span className="text-sm pl-2">Anywhere</span>
      <span>|</span>
      <span className="text-sm">Any week</span>
      <span>|</span>
      <span className="text-sm pr-2">Add guest</span>
    </div>
  );
}
