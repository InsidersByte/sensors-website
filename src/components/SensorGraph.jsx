/* @flow */

import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryGroup, VictoryVoronoiTooltip, VictoryTheme } from 'victory';
import { mapToX, mapToTooltipLabel, mapToTickFormat } from '../util/sensorGraphHelper';
import type { SensorDataType } from '../types';

const theme = VictoryTheme.grayscale;
theme.axis.style.axis.stroke = '#FFFFFF';
theme.axis.style.tickLabels.fill = '#FFFFFF';

const lineStyle = {
    data: { stroke: '#FFFFFF' },
};

const SensorGraph = ({ data }: { data: Array<SensorDataType> }) => (
    <VictoryChart
        animate={{duration: 1000}}
        theme={theme}
    >
        <VictoryAxis
            tickFormat={mapToTickFormat}
        />

        <VictoryAxis
            dependentAxis
        />

        <VictoryGroup
            data={data}
            x={mapToX}
            y="value"
        >
            <VictoryLine
                style={lineStyle}
            />

            <VictoryVoronoiTooltip
                labels={mapToTooltipLabel}
            />
        </VictoryGroup>
    </VictoryChart>
);

export default SensorGraph;
