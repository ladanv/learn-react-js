import React, { Component } from 'react';

import PanelHeading from './PanelHeading';

const Panel = (props) => 
    <div className='panel panel-default'>
        {(() => { 
            return props.header ? <PanelHeading header={props.header} /> : null;
        })()}
        {props.children}
    </div>;

Panel.propTypes = {
    header: React.PropTypes.string
};

export default Panel;
