import React from "react";
import Sea

export default function Search() {
  return (
    <div className="flex items-center space-x-2 border rounded-2xl">
      <span className="text-sm pl-2">Anywhere</span>
      <span>|</span>
      <span className="text-sm ">Any where</span>
      <span>|</span>
      <span className="text-sm pr-2">Add guest</span>
      <span>
        <Searchlogo/>
      </span>
    </div>
  );
}
