import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content text-center mt-5">
        <h1 className="display-4">Welcome to My Blogspace</h1>
        <p className="lead">
          Explore a world of thoughts, ideas, and stories from passionate writers.
        </p>
        <p>
          Whether you're seeking inspiration, knowledge, or simply a good read, My Blogspace
          is your gateway to a diverse range of topics and perspectives.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search for articles..." />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-lg">Start Exploring</button>
      </div>
    </div>
  );
};

export default Home;
