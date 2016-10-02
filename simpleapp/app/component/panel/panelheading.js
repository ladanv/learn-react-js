import React, { Component } from 'react';

const PanelHeading = ({ header }) =>
    <div className='panel-heading'>
        <h2 className='panel-title'>{header}</h2>
    </div>;

PanelHeading.propTypes = {
    header: React.PropTypes.string.isRequired
};

export default PanelHeading;