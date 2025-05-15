import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(
  express.urlencoded({
    extended: true, /// extended: true : Allows parsing of nested objects and arrays using the qs library.
    inflate: true, // Automatically decompresses gzip/deflate request bodies before parsing.
    limit: "20kb", //  Restricts the maximum size of the request body to 1MB for security.
    parameterLimit: 100, // Limits the number of form fields to 5000 to prevent DoS attacks.
  })
);

app.use(cookieParser());
app.use(express.static("public"));

export { app };
