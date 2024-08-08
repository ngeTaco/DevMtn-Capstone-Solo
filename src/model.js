import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///storagetracker');


// Define Location Table
export class Location extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Location.init(
    {
        locationId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        locationName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        locationType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'location',
        sequelize: db,
        timestamps: true,
        updatedAt: true,
    },
);

// Define Container Table
export class Container extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Container.init(
    {
        containerId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        locationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        containerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fillPercent: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        modelName: 'container',
        sequelize: db,
        timestamps: true,
        updatedAt: true,
    },
);

// Define Content Table
export class Content extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Content.init(
    {
        contentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        containerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        contentName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageLink: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        modelName: 'content',
        sequelize: db,
        timestamps: true,
        updatedAt: true,
    },
);


// Define Associations
Location.hasMany(Container, { foreignKey: 'locationId' });
Container.belongsTo(Location, { foreignKey: 'locationId' });

Container.hasMany(Content, { foreignKey: 'containerId' });
Content.belongsTo(Container, { foreignKey: 'containerId' });