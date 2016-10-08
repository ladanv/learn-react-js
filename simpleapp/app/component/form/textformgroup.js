import React, { PropTypes } from 'react';

const TextFormGroup = ({ id, label, placeholder, value }) => (
    <div className='form-group'>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} className='form-control' rows="3" placeholder={placeholder}
            defaultValue={value} />
    </div>
);

TextFormGroup.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

export default TextFormGroup;
