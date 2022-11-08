import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqBreadcrumb = () => {
  return (
    <section className='breadcrumb'>
       <div className='breadcrumb-container'>
            <p>Ana səhifə</p>
            <span>/</span>
            <p>Tez-tez verilən suallar</p>
       </div>
    </section>
  )
}

export default FaqBreadcrumb