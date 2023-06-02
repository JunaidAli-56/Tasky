import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../../../data/users';
import { Badge } from '@nextui-org/react';
import './projectDesc.scss'

const ProjectDes = () => {
    const { id } = useParams();
    const data = users.find(user => user.id.toString() === id);

    if (!data) {
        return <div>data not found</div>;
    }

    // Destructure the data object properties with a null check

    return (
        <div className='container-fluid py-5 px-5 '>
            <h2 className='fw-bold mb-3'>Task Description</h2>
            <div className='row rounded-3 p-4 detail-row'>
                <div className='col-12 '>
                    <div className='row'>
                        <div className='col-8'>
                            <h3>{data.title}</h3>
                            <p className='dates-color'>{data.dueDate}</p>
                        </div>
                        <div className='col-4 d-flex justify-content-end'>
                            <div>
                                <Badge variant={"bordered"} color={data.status.color}>
                                    {data.status.status}
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        {data.desc}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDes;
