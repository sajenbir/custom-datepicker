import React, { useState } from 'react';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

function App() {
  const [dt, setDt] = useState(moment());
  const today = moment()
  const disableFutureDt = current => {
    return current.isBefore(today)
  }
  
  return (
    <div className="App">
      <DatePicker
        inputProps={{
          style: { width: 250 }
        }}
        isValidDate={disableFutureDt}
        value={dt}
        dateFormat="DD-MMM-YYYY"
        timeFormat= {false}
        onChange={val => setDt(val)}
      /> <br />
      <div><b>Date:</b> {dt.format('YYYY-MMM-DD')}</div>
    </div>
  );
}

export default App;