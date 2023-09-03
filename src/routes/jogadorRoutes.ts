import express from 'express';
import {getAllJogadores} from '../controllers/jogadorControllers';
import prisma from '../database/db';

const router = express.Router();

router.get('/jogadores', getAllJogadores);

export default router;