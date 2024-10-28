import React from "react";

const missionPoints = [
  "Create comprehensive, practical tutorials",
  "Share latest industry insights and trends",
  "Build a supportive developer community",
];

const OurMission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted mb-6">
          At TechWorld, we believe in democratizing technology education. Our
          mission is to provide high-quality, accessible tech content that
          empowers developers at all stages of their journey.
        </p>
        <ul className="space-y-4">
          {missionPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="font-semibold mr-2">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
          alt="Team collaboration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default OurMission;
