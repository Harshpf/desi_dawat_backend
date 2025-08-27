const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const serverless = require('serverless-http');
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: true,
    credentials: true, 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization" 
}));

// Database connection
const { mongoDB } = require("./config/mongodb");
mongoDB();

// Routes
const user = require("./route/user/allroutes");
const admin = require("./route/admin/allroutes");

app.use("/api/admin", admin);
app.use("/api/user", user);

app.get("/", (req, res) => res.json({ message: "API running!" }));

// For local development
// if (process.env.NODE_ENV !== "production") {
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }

// Export app for Vercel
module.exports = serverless(app);
