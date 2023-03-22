import express from 'express';
import { getHome, searchSong } from '../controllers/zingControllers.js';

const router = express.Router();

router.get('/search', searchSong);
router.get('/home', getHome);

export default router;
