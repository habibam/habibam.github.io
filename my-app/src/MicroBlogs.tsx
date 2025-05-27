import React from 'react';
import { Blog } from './blogs';

type Props = {
  blogs: Blog[];
  onShowFullView: (data: Blog) => void;
};

const MicroBlogs: React.FC<Props> = ({ blogs, onShowFullView }) => (
  <>
    {blogs.map((blog) => (
      <div key={blog.name} className="blog">
        <a
          className="see-more"
          href="#"
          onClick={e => {
            e.preventDefault();
            onShowFullView(blog);
          }}
        >
          <div className="title">{blog.name}</div>
        </a>
        <a
          className="img-holder"
          href="#"
          onClick={e => {
            e.preventDefault();
            onShowFullView(blog);
          }}
        >
          <img src={`./images/${blog.image}`} alt={blog.name} />
        </a>
      </div>
    ))}
  </>
);

export default MicroBlogs;
