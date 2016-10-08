import React from 'react';

const InputFormGroup = (props) => (
    <div className='form-group'>
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} type='text' className='form-control'
            placeholder={props.placeholder}
            defaultValue={props.value} />
    </div>
);

InputFormGroup.propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
};

export default InputFormGroup;
