const axios = require("axios");

const climaAxios = async (req, res) => {
  try {
    const respuesta = await axios.get(
      "http://api.weatherunlocked.com/api/current/-33.37,-61.71?lang=es&app_id=6c37749f&app_key=b452f341b0784dab8a67eaf881f1ae13"
    );
    res.json({ data: respuesta.data, status: respuesta.status });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { climaAxios };
