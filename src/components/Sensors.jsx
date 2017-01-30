/* @flow */

import React from 'react';
import styled from 'styled-components';
import Sensor from './Sensor';
import type { SensorType } from '../types';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Sensors = ({ sensors }: { sensors: Array<SensorType> }) => (
    <Wrapper>
        {sensors.map(sensor => (
            <Sensor key={sensor.id} sensor={sensor} />
        ))}
    </Wrapper>
);

export default Sensors;
