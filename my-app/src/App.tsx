import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import VolunteerProjects from './VolunteerProjects';
import MicroBlogs from './MicroBlogs';
import Modal from './Modal';
import { Blog, blogs } from './blogs';
import { VolunteerProjects as VolunteerProjectsType, volunteerProjects } from './volunteer-projects';
import './index.css';

export type FullViewData = Blog | VolunteerProjectsType | null;

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'full-view'>('main');
  const [fullViewData, setFullViewData] = useState<FullViewData>(null);

  const showFullView = (data: Blog | VolunteerProjectsType) => {
    setFullViewData(data);
    setCurrentView('full-view');
  };

  const closeModal = () => {
    setCurrentView('main');
    setFullViewData(null);
  };

  return (
    <Router>
      <div className="topbar">
        <div className="nav"><Link to="/">about</Link></div>
        <div className="nav"><Link to="/volunteer">volunteer work</Link></div>
        <div className="nav"><Link to="/blogs">micro blog</Link></div>
      </div>
      <Routes>
        <Route path="/" element={
          <div className="about-holder">
            <div className="content">
              <h1 className="font-lg" id="about">Habiba Mohamed</h1>
              <About />
            </div>
          </div>
        } />
        <Route path="/volunteer" element={
          <div className="volunteer-holder">
            <div className="content">
              <h1 className="font-lg" id="project"> Volunteer Work </h1>
              <div>I began volunteering with Lion Guardians in 2022, below are some of my favorite projects I’ve worked at LINC.</div>
              <div className="projects-container">
                <VolunteerProjects projects={volunteerProjects} onShowFullView={showFullView} />
              </div>
            </div>
          </div>
        } />
        <Route path="/blogs" element={
          <div className="blog-holder">
            <div className="content">
              <h1 className="font-lg" id="blog"> Micro Blogs </h1>
              <div className="blogs-container">
                <MicroBlogs blogs={blogs} onShowFullView={showFullView} />
              </div>
            </div>
          </div>
        } />
      </Routes>
      <Modal data={fullViewData!} onClose={closeModal} isOpen={currentView === 'full-view' && !!fullViewData} />
      <footer style={{ textAlign: 'center', padding: '20px 0', fontSize: '0.95rem', color: '#888' }}>
        &copy; {new Date().getFullYear()} Habiba Mohamed. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
