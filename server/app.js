import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import { Location, Container, Content } from './models/model.js'
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

//NOTE Update Names endpoints
// Update a location name
app.post('/api/location/:locationId', async (req, res) => {
    const { locationId } = req.params;
    const { locationName } = req.body;
    const location = await Location.findByPk(locationId);
    
    location.locationName = locationName;
    await location.save();
    res.json(location);
});

// Update a container name
app.post('/api/container/:containerId', async (req, res) => {
    const { containerId } = req.params;
    const { containerName } = req.body;
    const container = await Container.findByPk(containerId);
    
    container.containerName = containerName;
    await container.save();
    res.json(container);
});

// Update a content name
app.post('/api/content/:contentId', async (req, res) => {
    const { contentId } = req.params;
    const { contentName } = req.body;
    const content = await Content.findByPk(contentId);
    
    content.contentName = contentName;
    await content.save();
    res.json(content);
});

//NOTE Update parent locator for container and content
// Update the locationId of a container
app.post('/api/container/:containerId/location', async (req, res) => {
    const { containerId } = req.params;
    const { locationId } = req.body;
    const container = await Container.findByPk(containerId);

    container.locationId = locationId;
    await container.save();
    res.json(container);
});

// Update the containerId of a content
app.post('/api/content/:contentId/container', async (req, res) => {
    const { contentId } = req.params;
    const { containerId } = req.body;
    const content = await Content.findByPk(contentId);

    content.containerId = containerId;
    await content.save();
    res.json(content);
});

//NOTE Create new location, container, and contents
// Create a new location
app.post('/api/location', async (req, res) => {
    const { locationName = 'New Location', locationType = 'warehouse' } = req.body;
    const newLocation = await Location.create({ locationName, locationType });
    res.json(newLocation);
});

// Create a new container
app.post('/api/container', async (req, res) => {
    const { containerName = 'New Container', locationId } = req.body;
    const newContainer = await Container.create({ containerName, locationId });
    res.json(newContainer);
});

// Create a new content
app.post('/api/content', async (req, res) => {
    const { contentName = 'New Item', containerId } = req.body;
    const newContent = await Content.create({ contentName, containerId });
    res.json(newContent);
});

//NOTE Delete endpoints for a location, container, and contents
// Delete a location
app.delete('/api/location/:locationId', async (req, res) => {
    const { locationId } = req.params;
    const location = await Location.findByPk(locationId);

    if (!location) {
        return res.status(400).json({ error: 'Location not found' });
    }

    await Location.destroy({ where: { locationId: locationId } });
    res.sendStatus(204).json({ error: 'Location Removed' });
});

// Delete a container
app.delete('/api/container/:containerId', async (req, res) => {
    const { containerId } = req.params;
    const container = await Container.findByPk(containerId);

    if (!container) {
        return res.status(400).json({ error: 'Container not found' });
    }

    await Container.destroy({ where: { containerId: containerId } });
    res.sendStatus(204).json({ error: 'Container Removed' });
});

// Delete a content
app.delete('/api/content/:contentId', async (req, res) => {
    const { contentId } = req.params;
    const content = await Content.findByPk(contentId);

    if (!content) {
        return res.status(400).json({ error: 'Content not found' });
    }

    await Content.destroy({ where: { contentId: contentId } });
    res.sendStatus(204).json({ error: 'Content Removed' });
});

//NOTE Delete all entries within a parent locator
// Delete all containers with the same locationId
app.delete('/api/containers/:locationId', async (req, res) => {
    const { locationId } = req.params;
    await Container.destroy({ where: { locationId } });
    res.sendStatus(204);
});

// Delete all contents with the same containerId
app.delete('/api/contents/:containerId', async (req, res) => {
    const { containerId } = req.params;
    await Content.destroy({ where: { containerId } });
    res.sendStatus(204);
});


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));