import React from 'react'
import { Box, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

type Props = {
  color?: string;
  bgcolor?: string;
  border?: string;
}

const Search = ({color, bgcolor, border}: Props) => {

  return (
      <Box className="search-container" style={{background: bgcolor, border: `1px solid ${border}`}}>
        <InputBase 
          className="search-input" 
          style={{color: color}} 
          placeholder="Find your device"
        />
        <SearchIcon className="search-icon" style={{color: color}}/>
      </Box>
  )
}

export default Search;