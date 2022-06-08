export const sortSelectStyles = {
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
    padding: 0,
    color: '#F65261',
    cursor: 'pointer',
  }),
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    width: 200,
  }),
  valueContainer: (provided) => ({
    ...provided,
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
    color: '#FFF',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
