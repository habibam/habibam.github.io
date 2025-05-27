import React from 'react';
import { VolunteerProjects as VolunteerProjectsType } from './volunteer-projects';

type Props = {
  projects: VolunteerProjectsType[];
  onShowFullView: (data: VolunteerProjectsType) => void;
};

const VolunteerProjects: React.FC<Props> = ({ projects, onShowFullView }) => (
  <>
    {projects.map((project) => (
      <div key={project.name} className="project">
        <div className="title">{project.name}</div>
        <a
          className="img-holder"
          href="#"
          onClick={e => {
            e.preventDefault();
            onShowFullView(project);
          }}
        >
          <img src={`./${project.image}`} alt={project.name} />
        </a>
        <div className="info font-sm">
          <div>
            {typeof project.description === 'string'
              ? project.description.substring(0, 160)
              : project.description}
            <a
              className="see-more"
              href="#"
              onClick={e => {
                e.preventDefault();
                onShowFullView(project);
              }}
            >
              ...See More
            </a>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default VolunteerProjects;
