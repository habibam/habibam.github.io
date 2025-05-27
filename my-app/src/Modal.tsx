import React from 'react';
import ReactModal from 'react-modal';
import { Blog } from './blogs';
import { VolunteerProjects } from './volunteer-projects';

interface ModalProps {
  data: Blog | VolunteerProjects | null;
  onClose: () => void;
  isOpen: boolean;
}

ReactModal.setAppElement('#root');

const Modal: React.FC<ModalProps> = ({ data, onClose, isOpen }) => {
  if (!data) return null;
  const { name, description, links } = data;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Details"
      className="modal-content"
      overlayClassName="modal"
    >
      <button className="back-link" onClick={onClose}>X</button>
      <div className="title">{name}</div>
      <div className="description" dangerouslySetInnerHTML={{ __html: description as string }} />
      <div className="links">
        {links.map(link => (
          <a className="link-item" href={link.link} target="_blank" rel="noopener noreferrer" key={link.name}>{link.name}</a>
        ))}
      </div>
    </ReactModal>
  );
};

export default Modal;
