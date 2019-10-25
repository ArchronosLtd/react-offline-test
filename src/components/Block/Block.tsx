import React, { Component } from 'react';
import Usage from '../../models/Usage';
import './styles.scss';

type BlockProps = {
    data: Usage
}

// SEE SIMPLE FUNCTION BASED COMPONENTS
export default (props: BlockProps) => {
    return <div className="block">
        <div style={{ width: `${props.data.value}%` }}></div>
        <span>{props.data.label} ({props.data.value}%)</span>
    </div >;
}