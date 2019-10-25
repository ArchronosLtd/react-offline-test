// Link.react.test.js
import React from 'react';
import Chart from './Chart';
import renderer from 'react-test-renderer';

describe('Chart component', () => {
    const data = [
        {
            id: 'test',
            perc: 50,
            label: 'test'
        },
        {
            id: 'test2',
            perc: 50,
            label: 'test 2'
        }
    ]
    it('should have the correct id', () => {
        const component = renderer.create(
            <Chart data={data} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toBe('chart');
    });
});