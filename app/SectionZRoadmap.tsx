import React from 'react';

// Define the type for each step in the roadmap
type RoadmapStep = {
  dateRange: string;
  title: string;
  company: string;
  location?: string;
};

const Roadmap: React.FC = () => {
  // Define the steps of the career journey
  const steps: RoadmapStep[] = [
    {
      dateRange: 'Dec 2021 - May 2022',
      title: 'Project Coordinator Intern',
      company: 'RM Solutions',
    },
    {
      dateRange: 'June 2022 - Oct 2023',
      title: 'Project Management Associate',
      company: 'RAJ Group',
    },
    {
      dateRange: 'Sep 2023 - April 2024',
      title: 'Project Manager',
      company: 'iHealth and Wellness Foundation',
      location: 'NY, USA (Remote)',
    },
    {
      dateRange: 'April 2024 - Present',
      title: 'Senior Project Analyst',
      company: 'Codezee Solution',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Career Roadmap</h2>
      <div style={{ borderLeft: '2px solid #ddd', paddingLeft: '20px' }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              marginBottom: '20px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-10px',
                top: '5px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#007bff',
              }}
            />
            <h3 style={{ marginBottom: '5px' }}>{step.title}</h3>
            <p style={{ margin: 0 }}>
              <strong>{step.company}</strong> ({step.dateRange})
            </p>
            {step.location && <p style={{ margin: 0 }}>{step.location}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
