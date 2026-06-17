const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const healthRoutes = require('./routes/healthRoutes');
const versionRoutes = require('./routes/versionRoutes');
const infoRoutes = require('./routes/infoRoutes');

const app = express();

app.use(express.json());

// Mount routers
app.use('/', homeRoutes);
app.use('/health', healthRoutes);
app.use('/version', versionRoutes);
app.use('/info', infoRoutes);

module.exports = app;
