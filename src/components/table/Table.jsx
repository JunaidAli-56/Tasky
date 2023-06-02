'use client';
import { Table } from '@nextui-org/react';
import { renderCell } from './renderCell';
import './table.scss';

export default function Tables() {
  const columns = [
    { name: 'NAME',   uid: 'name' },
    { name: 'ROLE', uid: 'role' },
    { name: 'STATUS', uid: 'status' },
    { name: 'ACTIONS', uid: 'actions' },
  ];
  const users = [
    {
      id: 1,
      name: 'Emma Reichert',
      role: 'CEO',
      team: 'Management',
      status: 'active',
      age: '29',
      avatar: '/assets/img/users/user-1.png',
      email: 'emma.reichert@example.com',
    },
    {
      id: 2,
      name: 'Zoey Lang',
      role: 'Technical Lead',
      team: 'Development',
      status: 'paused',
      age: '25',
      avatar: '/assets/img/users/user-2.png',
      email: 'zoey.lang@example.com',
    },
    {
      id: 3,
      name: 'Jhon Fisher',
      role: 'Senior Developer',
      team: 'Development',
      status: 'active',
      age: '22',
      avatar: '/assets/img/users/user-8.png',
      email: 'jhon.fisher@example.com',
    },
    {
      id: 4,
      name: 'William Howard',
      role: 'Community Manager',
      team: 'Marketing',
      status: 'vacation',
      age: '28',
      avatar: '/assets/img/users/user-3.png',
      email: 'william.howard@example.com',
    },
    {
      id: 5,
      name: 'Kristen Copper',
      role: 'Sales Manager',
      team: 'Sales',
      status: 'active',
      age: '24',
      avatar: '/assets/img/users/user-5.png',
      email: 'kristen.cooper@example.com',
    },
  ];

  return (
    <div className="container-fluid table-container m-0 p-0">
      <div className="row">
        <div className="col">
          <Table
            aria-label="Example table with custom cells"
            css={{
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              backgroundColor: '#FFFFFF',
              margin: 0,
              padding: 20,
              height: 'auto',
              minWidth: '100%',
            }}
            selectionMode="none"
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column key={column.uid}>{column.name}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={users}>
              {(item) => (
                <Table.Row>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
