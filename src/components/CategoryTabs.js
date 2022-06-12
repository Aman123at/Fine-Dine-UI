import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { getCategories } from '../redux/slices/categorySlice';
import {useSelector} from 'react-redux'

import CardItems from './CardItems';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CategoryTabs = ({data,items}) => {
  console.log(items)
  const [value, setValue] = React.useState(0);
  
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {data?.map((valueInStr,index)=>
          
          <Tab label={valueInStr} {...a11yProps(index)} />
          )}
          {/* <Tab label="Item Two" {...a11yProps(1)} /> */}
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
     
      {data?.map((valueInStr,index)=>
      <>
    
      <TabPanel value={value} index={index}>
       {/* {valueInStr} */}
       <CardItems data={items.filter((val)=>val.category == valueInStr)} />
      </TabPanel>
      </>
      )
      
    }
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}

export default CategoryTabs;