import express from 'express';

import { fetchData } from './controller';

const router = express.Router();

router.get('/fetchData', fetchData);



export default router;