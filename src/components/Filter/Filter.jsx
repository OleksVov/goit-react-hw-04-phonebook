import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({value, onChange}) => (
    <label htmlFor="" className={css.label} >Find contacts by name
       <input 
       type="text"
       value={value}
       onChange={onChange} />
       </label>
)

export default Filter;


Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};