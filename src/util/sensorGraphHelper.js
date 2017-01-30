/* @flow */

import moment from 'moment';
import type moment$Moment from 'moment';
import { TIME_FORMAT } from '../constants';

export const mapToX = ({ time }: { time: moment$Moment }) => time.utc().unix();
export const mapToTooltipLabel = ({ x, y }: { x: number, y: number }) => `x: ${moment.unix(x).utc().format(TIME_FORMAT)}\ny: ${y}`;
export const mapToTickFormat = (d: number) => moment.unix(d).utc().format(TIME_FORMAT);
