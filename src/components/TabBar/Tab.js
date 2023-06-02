import * as React from 'react';
import TabPanel from './TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '../table/Table';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import { Dropdown } from '@nextui-org/react';
import './tab.scss';
import TaskBarComponent from '../TaskBar/TaskBarComponent';
import AddProjectTable from '../ProjectBar/AddProjectTable';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [visible, setVisible] = React.useState(false);
  const [taskVisible, setTaskVisible] = React.useState(false);
  const [projectVisible, setProjectVisible] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handler = () => setVisible(true);
  const taskHandler = () => setTaskVisible(true);
  const projectHandler = () => setProjectVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const closeTaskHandler = () => setTaskVisible(false);
  const closeProjectHandler = () => setProjectVisible(false);
  return (
    <div>
      <Box sx={{ width: '100%', marginTop: '30px', padding: 0 }}>
        <Box
          sx={{
            paddingLeft: '20px',
            paddingRight: '20px',
            border: 1,
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 4,
            background: '#ffff',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="User"
              {...a11yProps(0)}
            />
            <Tab
              label="Task"
              {...a11yProps(1)}
            />
            <Tab
              label="Project"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel
          sx={{ padding: 0 }}
          value={value}
          index={0}
        >
          <div className="container-fluid m-0 p-0">
            <div className="row">
              <div className="col-12  d-flex justify-content-between bg-white rounded-4 px-4 py-2 align-items-center mb-4">
                <p className="fw-bold fs-3 mt-2">Add User</p>
                <Button
                  auto
                  shadow
                  onPress={handler}
                >
                  Add user
                </Button>
              </div>
              <div className="col-12">
                <Table />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          <div className="container-fluid m-0 p-0">
            <div className="row">
              <div className="col-12  d-flex justify-content-between bg-white rounded-4 px-4 py-2 align-items-center mb-4">
                <p className="fw-bold fs-3 mt-2">Add Task</p>
                <Button
                  auto
                  shadow
                  onPress={taskHandler}
                >
                  Add Task
                </Button>
              </div>
              <div className="col-12">
                <TaskBarComponent />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
        >
          <div className="container-fluid m-0 p-0">
            <div className="row">
              <div className="col-12  d-flex justify-content-between bg-white rounded-4 px-4 py-2 align-items-center mb-4">
                <p className="fw-bold fs-3 mt-2">Add Project</p>
                <Button
                  auto
                  shadow
                  onPress={projectHandler}
                >
                  Add Project
                </Button>
              </div>
              <div className="col-12">
                <AddProjectTable />
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>

      {/* Add user Modal */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            b
            size={18}
          >
            Add User
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Description"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />

          <div className="modalTrigerDiv">
            <Dropdown>
              <Dropdown.Button
                flat
                className="trigerBox"
              >
                Role
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">New file</Dropdown.Item>
                <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                <Dropdown.Item key="edit">Edit file</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            color="error"
            onPress={closeHandler}
          >
            Close
          </Button>
          <Button
            auto
            onPress={closeHandler}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* add task modal */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={taskVisible}
        onClose={closeTaskHandler}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            b
            size={18}
          >
            Add Task
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Task"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Description"
          />

          <div className="modalTrigerDiv">
            <Dropdown>
              <Dropdown.Button
                flat
                className="trigerBox"
              >
                Priority
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">Low</Dropdown.Item>
                <Dropdown.Item key="copy">medium</Dropdown.Item>
                <Dropdown.Item key="edit">High</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            color="error"
            onPress={closeTaskHandler}
          >
            Close
          </Button>
          <Button
            auto
            onPress={closeTaskHandler}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* add project task */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={projectVisible}
        onClose={closeProjectHandler}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            b
            size={18}
          >
            Add Project
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Project Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Description"
          />

          <div className="modalTrigerDiv">
            <Dropdown>
              <Dropdown.Button
                flat
                className="trigerBox"
              >
                Project type
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">small</Dropdown.Item>
                <Dropdown.Item key="copy">normal</Dropdown.Item>
                <Dropdown.Item key="edit">Big</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            color="error"
            onPress={closeProjectHandler}
          >
            Close
          </Button>
          <Button
            auto
            onPress={closeProjectHandler}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
