import classes from '@/styles/components/Filter.module.css';
import React from 'react';
import { Box, Select, MenuItem, Typography } from '@mui/material';
import { filters } from '@/data/projectsFilters';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from '@/utils/types';

type Props = {
  variant: string;
  value: string;
  handleChange: (value: string) => void;
};

type Filters = {
  Industry: { title: string; value: string }[];
  Type: { title: string; value: string }[];
};

function Filter({ variant, value, handleChange }: Props) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="body4">{variant}</Typography>
      <Select
        className={classes.select}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {filters[variant as keyof Filters].map((el: Filter) => (
          <MenuItem value={el.value} key={uuidv4()}>
            {el.title}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default Filter;
