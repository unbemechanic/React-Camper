import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MotorNavIn } from '../style';
import {campcar} from '..//page/data/mockdata'
import SizeCheckboxes from './checkbox';


export default function AccordionExpandDefault() {
    const data = campcar.maindata;
    const license1 = data.filter((value)=>value.car.company == '1종 보통')
  return (
    <div>
      <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
      }}>
        <AccordionSummary sx={{backgroundColor: 'inherits', border:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><b>Cost of Car</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div  style={{display:'flex', gap:'30px'}}>
                            <label style={{display:'grid', gap:'5px'}}>from
                                <MotorNavIn type='number'/>
                            </label>
                            <label  style={{display:'grid'}}>to
                                <MotorNavIn type='number'/>
                            </label>
                        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
      }}>
        <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><b>Brand</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
            {data.map((value)=>{
                return(
                    <div style={{display:'flex', alignItems:'center'}}><SizeCheckboxes/> {value.car.company}</div>
                )
            })}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
      }}>
        <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><b>License type</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
            {data.map((value)=>{
                return(
                    <div style={{display:'flex', alignItems:'center'}}><SizeCheckboxes/> {value.car.license}</div>
                )
            })}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
      }}>
        <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'30px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><b>Number of travelers</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
            {data.map((value)=>{
                return(
                    <div style={{display:'flex', alignItems:'center'}}><SizeCheckboxes/> {value.car.people}</div>
                )
            })}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{backgroundColor: 'inherit',boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)'
      }}>
        <AccordionSummary sx={{backgroundColor: 'inherits', borderTop:'none', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)', marginBottom:'50px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><b>Location</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
            {data.map((value)=>{
                return(
                    <div style={{display:'flex', alignItems:'center'}}><SizeCheckboxes/> {value.car.location}</div>
                )
            })}
        </AccordionDetails>
      </Accordion>
      

    </div>
  );
}
