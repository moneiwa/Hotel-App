import React, { useState} from 'react'
import DatePicker from 'react-datepicker'





function DatePicker() {

const [selectedDate,setSelectedDate]=useState(null);

const minDate = new Date('2024-09-12T00:00:00.000Z');
const maxDate = new Date('2024-09-12T23:59:59.999Z');

const handleDateChange = (date) => {
  setSelectedDate(date);
};

return (
  <DatePicker
    selected={selectedDate}
    onChange={handleDateChange}
    dateFormat="MM/dd/yyyy hh:mm aa"
    minDate={minDate}
    maxDate={maxDate}
    showTimeSelect
    timeIntervals={30}
    timeFormat="hh:mm aa"
  />
       
       
   

  )
}

export default DatePicker;