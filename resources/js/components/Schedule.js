import ReactDOM from 'react-dom';
import './app.css';
import { useState } from 'react';
import Showing from './Showing';

function Schedule () {

  const cinemas = [
    { name: "Cinema A", sched: "1:30 - 3:30" },
    { name: "Cinema A", sched: "5:00 - 7:00" },
    { name: "Cinema A", sched: "7:30 - 9:30" },
    { name: "Cinema B", sched: "1:30 - 2:30" },
    { name: "Cinema B", sched: "5:00 - 7:00" },
    { name: "Cinema B", sched: "7:30 - 9:30" },
  ];

  return (
    <div>
      <div className="scheddetails">
        <h1 className='moviestatus'>Movie A</h1>
      </div>
      <div className="schedcontainer">
        {cinemas.map((cinemas) => {
          return(
            <div className="scheddetails">
              <div className='scheditem'>
              <h1 className='moviestatus'>{cinemas.name}</h1>
              </div>
              <div className='scheditem'>
                <h1 className='moviestatus'>{cinemas.sched}</h1>
              </div>
              <div className='book'>
                <h1 className='moviestatus'>Book</h1>
              </div>
            </div>
          );
        })}
       </div>
    </div>
  );
}

export default Schedule;