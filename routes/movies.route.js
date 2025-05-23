import express from 'express'
import { moviesCreate, 
        moviesDelete, 
        moviesDetail, 
        moviesIndex, 
        moviesUpdate } from '../controllers/movies.controllers.js';

const router = express.Router();

// R - READ 
router.get('/movies', moviesIndex)

// C - FOR CREATE

router.post('/movies', moviesCreate)

router.put('/movies/:id', moviesDetail)

// UPDATE CRUD

router.put('/movies/:id', moviesUpdate)

// DELETE

router.delete('/movies/:id', moviesDelete)

export default router