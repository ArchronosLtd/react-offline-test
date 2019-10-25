// Link.react.test.js
import React from 'react';
import Block from './Block';
import renderer from 'react-test-renderer';

describe('Block component', () => {
    const data = {
        id: 'test',
        perc: 50,
        label: 'test'
    };

    it('should have the correct id', () => {
        const component = renderer.create(
            <Block data={data} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toBe('block');
    });
});