import { useState } from 'react';

const Filter_input = ({ onFilterChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <>
    </>
  );
};
export default Filter_input