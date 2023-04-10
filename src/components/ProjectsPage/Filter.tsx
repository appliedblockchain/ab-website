import classes from '@/styles/components/Filter.module.css';
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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
    <FormControl>
      <InputLabel id="select-label">{variant}</InputLabel>
      <Select
        className={classes.select}
        labelId="select-label"
        value={value}
        label={variant}
        onChange={(e) => handleChange(e.target.value)}
      >
        {filters[variant as keyof Filters].map((el: Filter) => (
          <MenuItem value={el.value} key={uuidv4()}>
            {el.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Filter;
