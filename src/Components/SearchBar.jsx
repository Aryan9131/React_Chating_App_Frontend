import { TextField } from '@mui/material';
import React from 'react';

export const SearchBar = ({ setSearchTerm }) => {
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);  // Update the search term
    };

    return (
        <TextField 
            type="text" 
            placeholder="Search by name..." 
            onChange={handleSearch}  // Trigger filtering on input change
            sx={{width:"98%"}}
        />
    );
};
