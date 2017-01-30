import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Sensor from './Sensor';

describe('Sensor', () => {
    it('should render', () => {
        const wrapper = shallow(
            <Sensor sensor={{
                name: 'sensor',
                data: [
                    { time: moment.unix(1472120033), value: 25.3 },
                    { time: moment.unix(1472119853), value: 25.1 },
                ],
            }} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
