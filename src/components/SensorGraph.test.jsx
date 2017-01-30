import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import SensorGraph from './SensorGraph';

describe('SensorGraph', () => {
    it('should render', () => {
        const wrapper = shallow(
            <SensorGraph data={[
                { time: moment.unix(1472120033), value: 25.3 },
                { time: moment.unix(1472119853), value: 25.1 },
            ]} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
