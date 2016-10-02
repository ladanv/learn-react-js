import React, { Component } from 'react';

const TextFormGroup = ({ id, label, placeholder, value }) => (
    <div className='form-group'>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} className='form-control' rows="3" placeholder={placeholder}
            defaultValue={value} />
    </div>
    );

TextFormGroup.propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
};

export default TextFormGroup;