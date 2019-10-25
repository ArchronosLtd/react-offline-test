import React, { Component } from 'react';
import Usage from '../../models/Usage';
import Block from '../Block/Block';
import './styles.scss';

// define the props
type ChartState = {
    data: Array<any>
}

// THIS DOESNT NEED TO BE A CLASS, JUST THOUGHT I'D SHOW I COULD
// DO CLASS BASED COMPONENTS TOO :)
export default class Chart extends Component<ChartState> {
    render() {
        let blocks = this.props.data.map((usage: Usage, i: number) => {
            return <Block key={i} data={usage} />
        });

        return <div className="chart">
            {blocks}
        </div>;
    }
}