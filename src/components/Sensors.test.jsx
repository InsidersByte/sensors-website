import React from 'react';
import { shallow } from 'enzyme';
import Sensors from './Sensors';

describe('Sensors', () => {
    it('should render', () => {
        const wrapper = shallow(
            <Sensors sensors={[
                { id: 1 },
                { id: 2 },
            ]} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
