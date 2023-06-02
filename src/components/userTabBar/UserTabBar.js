import * as React from 'react';
import TabPanel from './UserTabpanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserProjectTable from '../UserProjectTable/UseProjectTable';
import UserTaskTable from '../userTableComponents/UserTaskTable'
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: '30px 60px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="User Task"
            {...a11yProps(0)}
          />
          <Tab
            label="User Project"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
      >
        <div>
          <UserTaskTable />
        </div>
      </TabPanel>

      <TabPanel
        value={value}
        index={1}
      >
        <UserProjectTable />
      </TabPanel>
    </Box>
  );
}
