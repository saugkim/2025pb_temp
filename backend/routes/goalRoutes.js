import express from 'express'
import {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} from '../controllers/goalController.js'
import {protect} from '../middleware/authMiddleware.js'
import checkObjectId from '../middleware/checkObjectId.js'

const goalRouter = express.Router()

goalRouter.route('/')
    .get(protect, getGoals)
    .post(protect, setGoal);
goalRouter.route('/:id')
    .put(protect, updateGoal)
    .delete(protect, deleteGoal);

export default goalRouter;


