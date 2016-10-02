import React, { Component } from 'react';

const InputFormGroup = ({ id, label, placeholder, value }) => (
    <div className='form-group'>
        <label htmlFor={id}>{label}</label>
        <input id={id} type='text' className='form-control' 
            placeholder={placeholder}
            defaultValue={value} />
    </div>
    );

InputFormGroup.propTypes = {
    item: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        label: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string
    })
};

export default InputFormGroup;