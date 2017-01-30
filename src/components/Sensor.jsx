/* @flow */

import React from 'react';
import styled from 'styled-components';
import SensorGraph from './SensorGraph';
import { FULL_DATE_FORMAT } from '../constants';
import type { SensorType } from '../types';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 30%;
    margin-top: 1.5em;
    padding: 1.5em 0.5em;
    background: #61BFAD;
    color: #FFFFFF;
    text-align: center;
    
    @media (max-width: 1279px) {
        width: 45%;
    }
    
    @media (max-width: 736px) {
        width: 90%;
    }
`;

const Title = styled.div`
    text-transform: capitalize;
    font-size: 2.5em;
`;

const Value = styled.div`
    font-size: 5em;
    margin: 0.1em 0;
`;

const Text = styled.div`
    font-size: 1.25em;
`;

const Sensor = ({ sensor: { name, data } }: { sensor: SensorType }) => {
    const [{ time, value }] = data;

    return (
        <Wrapper>
            <Title>{name}</Title>

            <SensorGraph data={data} />

            <Text>Lastest Reading</Text>
            <Value>{value}</Value>
            <Text>{time.utc().format(FULL_DATE_FORMAT)}</Text>
        </Wrapper>
    );
};

export default Sensor;
