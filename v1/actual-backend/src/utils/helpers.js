/**
 * Helper functions for the API
 */

// Handle database errors
const handleDatabaseError = (res, error) => {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
};

// Get current date formatted as YYYY-MM-DD
const getCurrentDate = () => {
    return new Date().toISOString().slice(0, 10);
};

// Get repository from connection
const getRepository = (connection, entity) => {
    return connection.getRepository(entity);
};

module.exports = {
    handleDatabaseError,
    getCurrentDate,
    getRepository
};