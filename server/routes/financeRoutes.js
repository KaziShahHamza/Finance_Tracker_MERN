import express from 'express';
import {
  addFinance,
  getFinances,
  updateFinance,
  deleteFinance,
} from '../controllers/financeController.js';

import { requireAuth } from '../middlewares/requireAuth.js';

const router = express.Router();

// All routes require authentication
router.use(requireAuth);

router.get('/', getFinances);            // GET /api/finance
router.post('/', addFinance);            // POST /api/finance
router.put('/:id', updateFinance);       // PUT /api/finance/:id
router.delete('/:id', deleteFinance);    // DELETE /api/finance/:id

export default router;
