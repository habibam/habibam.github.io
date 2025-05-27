import React from 'react';

const About: React.FC = () => (
  <div>
    I am a Senior Software Engineer at Microsoft, specializing in AI Security. I also <a href="https://linclion.org/technical-development-team/#habibamohamed">volunteer</a> as a Machine Learning Engineer at <a href="https://github.com/linc-lion/LINC-detector?tab=readme-ov-file#linc-object-detector">Lion Guardians</a>, contributing to AI-driven wildlife conservation efforts.
    <br /><br />
    My work centers on securing AI systems and enhancing visibility and observability of AI-driven processes to ensure reliability and trust.
    <br /><br />
    My passion centers around the intersection of AI, security, and observability. I'm dedicated to leveraging technology to create positive impact, whether through securing enterprise AI systems or applying machine learning to wildlife conservation efforts.
    <br /><br />
    Additionally, I enjoy mentoring junior engineers, especially other minority women in tech, to help them grow and succeed in their careers. I believe diverse perspectives are essential for building ethical and secure AI systems.
    <br /><br />
    <div className="email font-sm">
      Resume available upon request. All opinions expressed are my own and do not reflect those of my employer.
      <div className='external' style={{marginTop: '10px'}}>
        <a href="https://linkedin.com/in/habibamohamed" target="_blank" rel="noopener noreferrer" className='icon-link'><img src="/images/linked_in.png" alt="LinkedIn" /></a>
        <a href="https://github.com/habibam" target="_blank" rel="noopener noreferrer" className='icon-link'><img src="/images/github.png" alt="GitHub" /></a>
        <a href="https://scholar.google.com/citations?user=MetBPh8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className='icon-link'><img src="/images/scholar.png" alt="Google Scholar" /></a>
      </div>
      <div className='external' style={{marginTop: '10px'}}>
        Find me in these #slack communities:
        <a href='https://bentoml.slack.com/team/U02MBFM7P7Y' target='_blank' rel='noopener noreferrer'>BentoML</a>{' '}
        <a href='https://mlops-community.slack.com/team/U038CKDA738' target='_blank' rel='noopener noreferrer'>MLOps</a>{' '}
        <a href='https://wsccommunity.slack.com/team/UGZA7NPEK' target='_blank' rel='noopener noreferrer'>Write Speak Code</a>{' '}
        <a href='https://rands-leadership.slack.com/team/U07AKCMSJUT' target='_blank' rel='noopener noreferrer'>RLS</a>
      </div>
    </div>
  </div>
);

export default About;
