const axios = require('axios');
require('dotenv').config();

const ACCESS_KEY = String(process.env.ACCESS_KEY);

/**
 * Serverless function to securely pull a random photo
 * from the Unsplash API
 */
exports.handler = async (event, context, callback) => {
  try {
    const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data),
    });
  } catch (err) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify(err),
    });
  }
};
