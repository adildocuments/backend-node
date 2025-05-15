import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config();
connectDb().then(() => {
  app.listen(process.env.PORt()=>console.log("Server is running on the port number:"+ process.env.PORT))
}).catch((error)=>{
  console.log('Connection is failed:', error)
});

// (async () => {
//   try {
//     const initiateConnection = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     app.listen(5000, () => {
//       console.log("server is running");
//     });

//     console.log("initiateConnection", initiateConnection);
//   } catch (error) {
//     console.log("error failed:", error);
//   }
// })();
