import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <div className="mx-auto px-24">{children}</div>
    </>
  );
}
