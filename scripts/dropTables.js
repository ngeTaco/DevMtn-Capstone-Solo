// dropTables.js
const { sequelize } = require('./db'); // Adjust the path as necessary

async function dropTables() {
    const queryInterface = sequelize.getQueryInterface();

    try {
        await queryInterface.dropTable('Locations');
        await queryInterface.dropTable('Containers');
        await queryInterface.dropTable('Contents');
        console.log('Tables dropped successfully.');
    } catch (error) {
        console.error('Error dropping tables:', error);
    }
}

dropTables().then(() => {
    console.log('Drop tables script executed.');
    process.exit();
});