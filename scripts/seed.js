import lodash from 'lodash';
import { Location, Container, Content, db } from '../src/model';
import locationData from './data/locations.json' assert { type: 'json' };
import containerData from './data/containers.json' assert { type: 'json' };
import contentData from './data/contents.json' assert { type: 'json' };

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');