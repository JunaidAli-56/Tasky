import React from 'react';
import TaskBox from './TaskBox/TaskBox';
import Tab from './TabBar/Tab';

const Admin = () => {
  return (
    <div className="container-fluid p-lg-5 p-md-4 p-sm-4 main-container">
      <div className="row ">
        <TaskBox />
      </div>
      <div className="row">
        <Tab />
      </div>
    </div>
  );
};

export default Admin;
