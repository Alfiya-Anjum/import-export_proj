
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sendQuoteRouter from './routes/send-quote';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();

// Allow requests from the Vite frontend
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Parse JSON request bodies
app.use(express.json({ limit: '10mb' }));

// Health check
app.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Zorima API is running.',
  });
});

// Export enquiry endpoint
app.use('/api', sendQuoteRouter);

// Start backend
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Zorima API running at http://localhost:${PORT}`);
});
