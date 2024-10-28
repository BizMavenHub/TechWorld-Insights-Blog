import React from "react";

export const PolicySection = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4 text-muted">{children}</div>
    </section>
  );
};
