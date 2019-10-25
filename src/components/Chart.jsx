import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';

// THIS DOESNT NEED TO BE A CLASS, JUST THOUGHT I'D SHOW I COULD
// DO CLASS BASED COMPONENTS TOO :)
export default class Chart extends React.Component {
    render() {
        return <div id="chart">
            <ResponsivePie data={this.props.data}
                margin={{ right: 80, left: 100 }}
                startAngle={-90}
                endAngle={90}
                enableSlicesLabels={false}
                tooltip={({ id, value }) => (
                    <span>
                        {id}: {value}%
                    </span>
                )}
            />
        </div>;
    }
}

Chart.propTypes = {
    data: PropTypes.array
}