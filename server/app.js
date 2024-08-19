import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import { Location, Container, Content } from '../src/model.js'
import appRouter from './routes/index.js';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

app.use(appRouter);

//Note Get singular by id
// Gets a single location by id
app.get('/api/location/:locationId', async (req, res) => {
    const { locationId } = req.params;
    const location = await Location.findByPk(locationId);
    res.json(location);
})

// Gets a single container by id
app.get('/api/container/:containerId', async (req, res) => {
    const { containerId } = req.params;
    const container = await Container.findByPk(containerId);
    res.json(container);
})

// Gets a single content by id
app.get('/api/content/:contentId', async (req, res) => {
    const { contentId } = req.params;
    const content = await Content.findByPk(contentId);
    res.json(content);
})


//Note Get all with matching id
// Get all containers with the same location ID
app.get('/api/containers/:locationId', async (req, res) => {
    const { locationId } = req.params;
    const containers = await Container.findAll({ where: { locationId: (locationId), }, });
    res.json(containers);
})

// Gets all contents with the same container ID
app.get('/api/contents/:containerId', async (req, res) => {
    const { containerId } = req.params;
    const contents = await Content.findAll({ where: { containerId: (containerId), }, });
    res.json(contents);
})

//Note Get all in database
// Get all locations
app.get('/api/all/locations', async (req, res) => {
    const allLocations = await Location.findAll();
    res.json(allLocations);
});

// Get all containers
app.get('/api/all/containers', async (req, res) => {
    const allContainers = await Container.findAll();
    res.json(allContainers);
});

// Get all contents
app.get('/api/all/contents', async (req, res) => {
    const allContents = await Content.findAll();
    res.json(allContents);
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));