export const formSelectStyles = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#232323',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '20px',
    borderRadius: '4px',
  }),
  option: (provided, { isSelected }) => {
    return {
      ...provided,
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '18px',
      color: 'rgba(255, 255, 255, 0.8)',
      padding: '10px 18px',
      cursor: 'pointer',
      textAlign: 'left',
      backgroundColor: isSelected ? '#F65261' : 'transparent',
      ':hover': {
        backgroundColor: isSelected ? '#F65261' : '#606060',
      },
    };
  },
  dropdownIndicator: () => ({
    padding: '15px',
    color: '#F65261',
    cursor: 'pointer',
  }),
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '56px',
    backgroundColor: '#555555',
    borderRadius: '4px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 19px',
    fontSize: '20px',
    lineHeight: '24px',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#F65261',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#FFFFFF',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    color: 'red',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgba(255, 255, 255, 0.3)',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    margin: 0,
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    color: '#FFF',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#FFFFFF',
    cursor: 'pointer',
  }),
};
