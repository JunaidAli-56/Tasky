'use client';
import React from 'react';
import './taskBar.scss';

const data = [
  {
    id: 1,
    title: 'Network Task',
    priority: 'low',
    desc: 'networking issue',
  },
  {
    id: 2,
    title: 'Mam',
    priority: 'high',
    desc: 'network issue',
  },
  {
    id: 3,
    title: 'phhbcab',
    priority: 'medium',
    desc: 'client issue',
  },
];

const TaskBarComponent = () => {
  return (
    <div className="container-fluid rounded-3 p-4 bg-light">
      <div className="row rounded-3 taskRowStyle p-2">
        <div className="col-12 py-2 d-flex justify-content-between align-items-center">
          <div className="fw-bold fs-5">Id</div>
          <div className="fw-bold fs-5">Name</div>
          <div className="fw-bold fs-5">priorty</div>
          <div className="fw-bold fs-5">description</div>
        </div>
      </div>

      {/* data row */}
      {data.map((item) => {
        return (
          <div
            className="row rounded-3 px-4 py-1 mt-4 dataRowStyle"
            key={item.id}
          >
            <div className="col-12 p-2 d-flex justify-content-between align-items-center">
              <div className="fs-5 text-muted">{item.id}</div>
              <div className="fs-5 text-muted">{item.title}</div>
              <div className="fs-5 text-muted">{item.priority}</div>
              <div className="fs-5 text-muted">{item.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskBarComponent;
