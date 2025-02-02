const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + process.env.NEWS_API_KEY);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Не вдалося отримати новини' });
    }
});

app.listen(5000, () => console.log('Сервер новин AI запущено на порту 5000'));
