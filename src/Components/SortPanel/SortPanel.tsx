import React from "react";
import Select from 'react-select';
import { sortSelectStyles } from './sortSelectStyles';
import { SelectValue } from '../../models/SelectValue';
import './SortPanel.scss';

interface SortPanelProps {
  sortOptions: SelectValue[];
  sortByValue: SelectValue;
  handleSelect: (value: React.SetStateAction<SelectValue>) => void;
}

const customStyles = sortSelectStyles;

export function SortPanel({ sortOptions, sortByValue, handleSelect }: SortPanelProps) {
  return (
    <div className="sort-panel">
      <span className="sort-panel-label">Sort by</span>
      <Select
        value={sortByValue}
        options={sortOptions}
        styles={customStyles}
        onChange={(value) => handleSelect(value as React.SetStateAction<SelectValue>)}
      />
    </div>
  );
}
