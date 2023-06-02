import * as React from 'react';
import { Table, Row, Col, Tooltip, User, Text ,Badge,} from "@nextui-org/react";
import { renderCell } from './renderCell';
import { EyeIcon } from "./EyeIcon";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { users, columns } from '../../data/users';



export default function UserProjectTable() {

    return (
        <div className="container-fluid table-container m-0 p-0">
            <div className="row">
                <div className="col">
                    {/* <Table
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
                                <Table.Row key={item.id}>
                                    {(columnKey) => (
                                        <Table.Cell key={columnKey}>
                                            <Link
                                                className='text-decoration-none'
                                                to={`/project-description/${item.id}`}
                                            >
                                                {renderCell(item, columnKey)}
                                            </Link>
                                        </Table.Cell>
                                    )}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table> */}
                    <Table
                        aria-label="Example table with static content"
                        css={{
                            height: "auto",
                            minWidth: "100%",
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
                            {users && users.map((e) => {
                                return (
                                    <Table.Row key={e.id} >

                                        <Table.Cell>{e.title}</Table.Cell>
                                        <Table.Cell>{e.dueDate}</Table.Cell>
                                        <Table.Cell><Badge variant={"bordered"} size={'sm'} color={e.status.color}>{e.status.status}</Badge></Table.Cell>
                                        <Table.Cell>{e.priorty}</Table.Cell>
                                        <Table.Cell><Link className='text-black text-decoration-none' to={`/project-description/${e.id}`}>

                                            {/* View */}
                                            <Col css={{ d: "flex" }}>
                                                <Tooltip content="Details">
                                                        <EyeIcon size={20} fill="#979797" />
                                                </Tooltip>
                                            </Col>

                                        </Link></Table.Cell>
                                    </Table.Row>

                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
}
