import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import  zingRoute  from '../server/routes/zingRoute.js';
const app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('common'));
app.use(cors());

//router
app.use('/api/zing', zingRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`);
});
