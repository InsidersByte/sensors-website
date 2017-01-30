const sensors = require('../../data/sensors.json');
const data = require('../../data/data.json');

module.exports = ({ express }) => {
    const router = express.Router();

    router
        .route('')

        .get((req, res) => res.json(sensors));

    router
        .route('/:sensorId')

        .get((req, res) => {
            const sensorData = data.filter(o => o.sensorId === req.params.sensorId);

            res.json(sensorData);
        });

    return router;
};
