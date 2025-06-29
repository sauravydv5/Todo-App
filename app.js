import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./src/routes/userRoute.js";
import taskRouter from "./src/routes/taskRoute.js";
import forgotPasswordRouter from "./src/routes/forgotPassword.js";
import connectDB from "./src/database/db.js";

// //app config
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 8001;
// mongoose.set("strictQuery", true);

// //middlewares
// app.use(express.json());
// app.use(cors());

// // Start server after DB connection
// connectDB()
//   .then(() => {
//     console.log("✅ Database Connection Established!");
//     app.listen(port, () => {
//       console.log(`🚀 Server running on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Database connection failed:", err);
//   });

// //api endpoints
// app.use("/user", userRouter);
// app.use("/task", taskRouter);
// app.use("/forgotPassword", forgotPasswordRouter);

// //listen
// app.listen(port, () => console.log(`Listening on localhost:${port}`));

//app config
dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
mongoose.set("strictQuery", true);

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://todo-app-frontend-rgku.onrender.com",
    credentials: true,
  })
);

// Start server after DB connection
connectDB()
  .then(() => {
    console.log("✅ Database Connection Established!");
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });

//api endpoints
app.use("/user", userRouter);
app.use("/task", taskRouter);
app.use("/forgotPassword", forgotPasswordRouter);
