const sensors = require('./sensors');

module.exports = ({ app, express }) => {
    app.use('/sensors', sensors({ express }));
};
