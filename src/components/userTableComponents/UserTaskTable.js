import { Table } from '@nextui-org/react';
import { renderCell } from './renderCell';

export default function UserTable() {
  const columns = [
    { name: 'TITLE', uid: 'title' },
    { name: 'DUE DATE', uid: 'dueDate' },
    { name: 'STATUS', uid: 'status' },
    { name: 'PRIORTY', uid: 'priorty' },
  ];
  const users = [
    {
      id: 1,
      title: 'Haadia',
      dueDate: '19-May-2023',
      status: 'active',
      priorty: "High",
    },
    {
      id: 2,
      title: 'Reichert',
      dueDate: '19-Oct-2023',
      status: 'paused',
      priorty: "Low",
    },
    {
      id: 3,
      title: 'Jhon',
      dueDate: '19-Sep-2023',
      status: 'active',
      priorty: "High",
    },
    {
      id: 4,
      title: 'Jaan',
      dueDate: '19-May-2023',
      status: 'paused',
      priorty: "Medium",
    },
    {
      id: 5,
      title: 'Emma Reichert',
      dueDate: '19-Dec-2023',
      status: 'active',
      priorty: "High",
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
