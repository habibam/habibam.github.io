import React from 'react';
import { Blog } from './blogs';
import { VolunteerProjects } from './volunteer-projects';

interface ModalProps {
  data: Blog | VolunteerProjects;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, onClose }) => {
  const { name, description, links } = data;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <a className="back-link" href="#" onClick={e => { e.preventDefault(); onClose(); }}>X</a>
        <div className="title">{name}</div>
        <div className="description" dangerouslySetInnerHTML={{ __html: description as string }} />
        <div className="links">
          {links.map(link => (
            <a className="link-item" href={link.link} target="_blank" rel="noopener noreferrer" key={link.name}>{link.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
