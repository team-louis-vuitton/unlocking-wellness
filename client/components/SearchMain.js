/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import styles from '../styles/SearchMain.module.css';

const SearchMain = () => {
  const filter = createFilterOptions();
  const services = [
    { service: 'Women\'s Health' },
    { service: 'Mental Health' },
    { service: 'Gender Affirmation Care' },
    { service: 'Family Planning' },
    { service: 'Accupuncture' },
    { service: 'Meditation' },
  ];
  const [value, setValue] = React.useState(null);

  return (
    <article className={styles.container}>
      <div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              setValue({
                service: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                service: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="search-services"
          options={services}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.service;
          }}
          renderOption={(option) => option.service}
          style={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Services" variant="outlined" />
          )}
        />
      </div>
    </article>
  );
};

export default SearchMain;
