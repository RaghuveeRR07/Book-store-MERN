import express, { urlencoded } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8001;
const URI = process.env.MONGO_URI;
const app = express();

//basic middleware
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors());

app.use("/api/v1/books", bookRoute );
app.use("/api/v1/users", userRoute); 

//connect to database using then-catch
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to database");
    // listening for requests
    app.listen(PORT, () => {
      console.log("Connected & listening on port", PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB", error);
  });

// connect to database using async-await
// const connectDB = async () => {
//   try {
//     await mongoose.connect(URI);
//     console.log("Connected to database");
//     // listening for requests
//     app.listen(PORT, () => {
//       console.log("Connected & listening on port", PORT);
//     });
//   } catch (error) {
//     console.error("Error connecting to DB", error);
//   }
// };

// connectDB();
