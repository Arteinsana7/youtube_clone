
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search  } from '@mui/icons-material';

import React from 'react'

const SearchBar = () => {
const [searchTerm, setSearchTerm]= useState('');
const navigate =useNavigate();

const handleSumit = (e)=>{
  e.preventDefault();
if(searchTerm) {}
navigate(`/search/${searchTerm}`);
setSearchTerm('');
}
  return (
    <Paper
    component="form"
    onSubmit={handleSumit}
    sx={{
        borderRadius:20,
        border: '1 px solid #e3e3e3',
        pl:2,
        boxShadow : 'none',
        mr : {sm: 5}
    }}
    >
      <input
      className="search-bar"
      placeholder='Search..'
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value) }
      />
      <IconButton type="submit"
      sx={{p:'10 px', color: 'red'}}> 
      <Search /> 
      </IconButton>
    </Paper>
  )
}

export default SearchBar
