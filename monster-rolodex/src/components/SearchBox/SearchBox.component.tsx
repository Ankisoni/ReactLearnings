import React ,{ FC } from 'react';

interface Props {
    // any props that come into the component
    placeholder:any,
    handleChange:any
}
export const SearchBox:FC<Props> = ({ placeholder, handleChange }) => (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );