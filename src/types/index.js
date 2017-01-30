/* @flow */

import type moment$Moment from 'moment';

export type SensorDataType = {
    sensorId: string,
    time: moment$Moment,
    value: number,
};

export type SensorType = {
    id: string,
    name: string,
    data: Array<SensorDataType>,
};
