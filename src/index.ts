import dotenv from "dotenv";
dotenv.config();

import express from "express";
import passport from "passport";
import session from "express-session"; // <- use this instead
import "./config/passport";
import authRoutes from "./routes/auth";

const app = express();
const PORT = 3001;

//  Use express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret", // store securely
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

//  Passport middlewares
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to OAuth Test Application!</h1> 
     <a href='/auth/google'>Login with Google</a> | 
     <a href='/auth/github'>Login with GitHub</a>
     
     <br/>
     
      <a href='/protected'>Protected Route</a>

     `
  );
});

app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(
      `<h2>Hello ${(req.user as any).displayName}</h2><a href='/auth/logout'>Logout</a>
      
      <br/>
      
      <a href='/'>Home</a>

      `
    );
  } else {
    res.redirect("/");
  }
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
