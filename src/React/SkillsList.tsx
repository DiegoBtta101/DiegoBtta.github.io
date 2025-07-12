import React, { useState } from "react";

const CategoryIcons = {
  "DevOps & Infrastructure": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2a10 10 0 1 0 10 10A10.0114 10.0114 0 0 0 12 2Zm4.93 14.36-1.41 1.41-2.12-2.12A3.9783 3.9783 0 0 1 8.35 12H6a6.0067 6.0067 0 0 0 10.93 4.36ZM8.36 6.35l1.41-1.41 2.12 2.12A3.9783 3.9783 0 0 1 15.65 12H18a6.0067 6.0067 0 0 0-10.93-5.65Z"/>
    </svg>
  ),
  "Embedded & IoT Systems": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M7 2v2H5a1 1 0 0 0-1 1v2h2v2H4v2h2v2H4v2h2v2H4v2a1 1 0 0 0 1 1h2v2h2v-2h6v2h2v-2h2a1 1 0 0 0 1-1v-2h-2v-2h2v-2h-2v-2h2V9h-2V7h2V5a1 1 0 0 0-1-1h-2V2h-2v2H9V2H7zm2 6h6v8H9V8z"/>
    </svg>
  ),
  "Distributed & Parallel Computing": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2L6 6v4c0 5 6 10 6 10s6-5 6-10V6l-6-4zm0 2.18L16.09 6H7.91L12 4.18zM12 20c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>
    </svg>
  ),
};


const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
  "DevOps & Infrastructure": [
    "Docker & Docker Swarm",
    "CI/CD pipelines",
    "Linux server administration",
    "Shared memory systems (NFS)",
    "Reverse proxy & networking",
  ],
  "Embedded & IoT Systems": [
    "Embedded Linux",
    "IoT communication protocols",
    "Microcontroller programming",
    "Sensor integration",
    "System-level debugging",
  ],
  "Distributed & Parallel Computing": [
    "Cluster configuration with reused laptops",
    "Parallel processing with Python",
    "Data partitioning and orchestration",
    "SSH automation with Ansible",
    "Big data tools: Spark (basics)",
  ],
};


  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
