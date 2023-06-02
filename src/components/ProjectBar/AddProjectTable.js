// import * as React from 'react';
// import { Table, Row, Col, Tooltip, User, Text, Badge, Modal, Input } from "@nextui-org/react";
// import { renderCell } from './renderCell';
// import { EditIcon } from "./EditIcon";
// import { IconButton } from './IconButton';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { users, columns } from '../../data/users';



// export default function UserProjectTable() {
//     const [visible, setVisible] = React.useState(false);
//     const [titles, setTitles] = React.useState()
//     const [dueDates, setDueDates] = React.useState('12')
//     const [priorties, setPriorties] = React.useState('low')
//     const [statuses, setStatueses] = React.useState('pending')
//     const [desc, setDesc] = React.useState('i have mmoney')

//     const handler = () => setVisible(true);

//     const closeHandler = () => {
//         setVisible(false);
//         console.log("closed");
//     };
//     return (
//         <div className="container-fluid table-container m-0 p-0">
//             <div className="row">
//                 <div className="col">
//                     <Table
//                         aria-label="Example table with static content"
//                         css={{
//                             height: "auto",
//                             minWidth: "100%",
//                         }}
//                         selectionMode="single"
//                     >
//                         <Table.Header>
//                             <Table.Column>TITLE</Table.Column>
//                             <Table.Column>DUE DATE</Table.Column>
//                             <Table.Column>STATUS</Table.Column>
//                             <Table.Column>PRIORTY</Table.Column>
//                             <Table.Column>ACTION</Table.Column>
//                         </Table.Header>
//                         <Table.Body>
//                             {users && users.map((e) => {
//                                 return (
//                                     <>
//                                         <Table.Row key={e.id} >

//                                             <Table.Cell>{e.title}</Table.Cell>
//                                             <Table.Cell>{e.dueDate}</Table.Cell>
//                                             <Table.Cell><Badge variant={"bordered"} size={'sm'} color={e.status.color}>{e.status.status}</Badge></Table.Cell>
//                                             <Table.Cell>{e.priorty}</Table.Cell>
//                                             <Table.Cell>
//                                                 {/* <Link className='text-black text-decoration-none' to={`/project-description/${e.id}`}>


//     </Link> */}
//                                                 <Col css={{ d: "flex" }}>
//                                                     <Tooltip content="Edit">
//                                                         <IconButton
//                                                             onClick={handler}
//                                                         >
//                                                             <EditIcon size={20} fill="#979797" />
//                                                         </IconButton>
//                                                     </Tooltip>
//                                                 </Col>


//                                             </Table.Cell>
//                                         </Table.Row>
//                                         <Modal
//                                             closeButton
//                                             aria-labelledby="modal-title"
//                                             open={visible}
//                                             onClose={closeHandler}
//                                         >
//                                             <Modal.Header>
//                                                 <Text id="modal-title" size={18}>
//                                                     Welcome to
//                                                     <Text b size={18}>
//                                                         NextUI
//                                                     </Text>
//                                                 </Text>
//                                             </Modal.Header>
//                                             <Modal.Body>
//                                                 <Input
//                                                     clearable
//                                                     bordered
//                                                     fullWidth
//                                                     color="primary"
//                                                     size="lg"
//                                                     placeholder="Email"
//                                                     value={titles}
//                                                 />
//                                                 <Input
//                                                     clearable
//                                                     bordered
//                                                     fullWidth
//                                                     color="primary"
//                                                     size="lg"
//                                                     placeholder="Password"
//                                                     value={dueDates}
//                                                 />
//                                             </Modal.Body>
//                                             <Modal.Footer>
//                                                 <Button auto flat color="error" onPress={closeHandler}>
//                                                     Close
//                                                 </Button>
//                                                 <Button auto onPress={closeHandler}>
//                                                     Sign in
//                                                 </Button>
//                                             </Modal.Footer>
//                                         </Modal>
//                                     </>
//                                 )
//                             })}
//                         </Table.Body>
//                     </Table>


//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { Table, Modal, Input, Button, Badge } from '@nextui-org/react';
import { EditIcon } from './EditIcon';
import { IconButton } from './IconButton';
import { users } from '../../data/users';

export default function UserProjectTable() {
  const [visible, setVisible] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priorty, setPriorty] = useState('');
  const [status, setStatus] = useState('');
  const [desc, setDesc] = useState('');

  const openModal = (row) => {
    setRowData(row);
    setTitle(row.title);
    setDueDate(row.dueDate);
    setPriorty(row.priorty);
    setStatus(row.status);
    setDesc(row.desc);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handleSave = () => {
    // Handle the save operation with the updated values
    // You can update the data in the users array or make an API call here
    closeModal();
  };

  return (
    <div className="container-fluid table-container m-0 p-0">
      <div className="row">
        <div className="col">
          <Table
            aria-label="Example table with static content"
            css={{
              height: 'auto',
              minWidth: '100%',
            }}
            selectionMode="single"
          >
            <Table.Header>
              <Table.Column>TITLE</Table.Column>
              <Table.Column>DUE DATE</Table.Column>
              <Table.Column>STATUS</Table.Column>
              <Table.Column>PRIORTY</Table.Column>
              <Table.Column>ACTION</Table.Column>
            </Table.Header>
            <Table.Body>
              {users &&
                users.map((row) => (
                  <Table.Row key={row.id}>
                    <Table.Cell>{row.title}</Table.Cell>
                    <Table.Cell>{row.dueDate}</Table.Cell>
                    <Table.Cell>
                      <Badge variant="bordered" size="sm" color={row.status.color}>
                        {row.status.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>{row.priorty}</Table.Cell>
                    <Table.Cell>
                      <IconButton onClick={() => openModal(row)}>
                        <EditIcon size={20} fill="#979797" />
                      </IconButton>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>

          <Modal open={visible} onClose={closeModal}>
            <Modal.Header className='fs-4 fw-bold'>Edit Data</Modal.Header>
            <Modal.Body>
              <Input
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                label="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <Input
                label="Priorty"
                value={priorty}
                onChange={(e) => setPriorty(e.target.value)}
              />
              <Input
                label="Status"
                value={status.status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <Input
                label="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSave}>Save</Button>
              <Button auto flat color="error" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
