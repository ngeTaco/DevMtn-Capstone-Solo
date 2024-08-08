import { Location, Container, Content, db } from '../src/model';
import locationData from './data/locations.json' assert { type: 'json' };
import containerData from './data/containers.json' assert { type: 'json' };
import contentData from './data/contents.json' assert { type: 'json' };

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

const locationsInDB = await Promise.all(
    locationData.map((location) => {
        const { locationName, locationType } = location;

        const newlocation = Location.create({
            locationName: locationName,
            locationType: locationType
        });

        return newlocation;
    }),
);

console.log('Locations seeded successfully!', locationsInDB);

const containersInDB = await Promise.all(
    containerData.map((container) => {
        const { locationId, containerName, fillPercent } = container;

        const newContainer = Container.create({
            locationId: locationId,
            containerName: containerName,
            fillPercent: fillPercent
        });

        return newContainer;
    }),
);

console.log('Containers seeded successfully!', containersInDB);

const contentsInDB = await Promise.all(
    contentData.map((content) => {
        const { containerId, contentName, imageLink } = content;

        const newContent = Content.create({
            containerId: containerId,
            contentName: contentName,
            imageLink: imageLink
        });

        return newContent;
    }),
);

console.log('Contents seeded successfully!', contentsInDB);

await db.close();
console.log('Finished seeding database!');