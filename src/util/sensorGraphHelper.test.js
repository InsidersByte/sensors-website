import moment from 'moment';
import { mapToX, mapToTooltipLabel, mapToTickFormat } from './sensorGraphHelper';

describe('sensorGraphHelper', () => {
   describe('mapToX', () => {
       it('should return the unix time in seconds', () => {
            const time = moment.unix(1472120033);
            expect(mapToX({ time })).toBe(1472120033);
       });
   });

   describe('mapToTooltipLabel', () => {
       it('should return the label text', () => {
            const value = { x: 1472119853, y: 25 };
            expect(mapToTooltipLabel(value)).toBe('x: 11:10:53\ny: 25')
       });
   });

   describe('mapToTickFormat', () => {
       it('should return the tick text', () => {
           const value = 1472119853;
           expect(mapToTickFormat(value)).toBe('11:10:53');
       });
   });
});
