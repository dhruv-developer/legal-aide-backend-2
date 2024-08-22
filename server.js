const express = require('express');
const cors = require('cors'); // Add this line
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const pdfRoutes = require('./routes/pdfRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Add this line
app.use(express.json());

app.use('/api/pdf', pdfRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
