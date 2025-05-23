require('dotenv').config(); // Loads variables from .env
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes'); // Existing auth routes
const postRoutes = require('./routes/post.routes'); // ✅ NEW: Post routes!

const app = express();

app.use(express.json()); // Middleware: handles JSON request bodies

// Register routes
app.use('/api/auth', authRoutes);  // e.g., /api/auth/login
app.use('/api/posts', postRoutes); // ✅ NEW: e.g., /api/posts/create

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => console.log('Server running'));
  })
  .catch(err => console.error(err));
