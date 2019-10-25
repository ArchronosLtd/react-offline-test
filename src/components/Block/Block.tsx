import React, { Component } from 'react';
import Usage from '../../models/Usage';
import './styles.scss';

type BlockProps = {
    data: Usage
}

// SEE SIMPLE FUNCTION BASED COMPONENTS
export default ({ data }: BlockProps) => {
    return <div className="block">
        <div style={{ width: `${data.value}%` }}></div>
        <span>{data.label} ({data.value}%)</span>
    </div >;
}