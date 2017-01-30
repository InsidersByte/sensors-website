/* @flow */

import React, { Component } from 'react';
import moment from 'moment';
import api from '../api';
import Sensors from '../components/Sensors';
import { SENSORS_URL, ONE_MINUTE_S, HTTP_METHOD_GET } from '../constants';

export default class App extends Component {
    state = {
        sensors: [],
    };

    componentDidMount() {
        api({ endpoint: SENSORS_URL, method: HTTP_METHOD_GET })
            .then((sensors) =>
                Promise.all(sensors.map((sensor) =>
                    api({ endpoint: `${SENSORS_URL}/${sensor.id}`, method: HTTP_METHOD_GET })
                        .then(data => ({ ...sensor, data }))
                ))
            )
            .then(sensors =>
                sensors.map((sensor) => {
                    const { data } = sensor;

                    const maximumTime = Math.max(...data.map(({ time }) => time));
                    const minimumTime = maximumTime - (ONE_MINUTE_S * 5);

                    const filteredData = data.filter(d => d.time > minimumTime);

                    const updatedData = filteredData.map(({ time, value }) => ({
                        value,
                        time: moment.unix(time),
                    }));

                    return { ...sensor, data: updatedData };
                })
            )
            .then((sensors) => {
                this.setState({ sensors });
            });
    }

    render() {
        const { sensors } = this.state;

        return (
            <Sensors sensors={sensors} />
        );
    }
}
