import React from "react";

const values = [
  {
    title: "Quality",
    description:
      "We maintain high standards in our content, ensuring accuracy and relevance.",
  },
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology, exploring and sharing new developments.",
  },
  {
    title: "Community",
    description:
      "We foster an inclusive environment where developers can learn and grow together.",
  },
];

export const OurValue = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-16 mx-8">
        {values.map((value, index) => (
          <div key={index} className="text-center p-6 rounded-lg bg-gray-100 ">
            <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
            <p className="text-muted">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
