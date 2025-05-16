import express from "express";
import passport from "passport";

const router = express.Router();

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

// GitHub Auth
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.error(err);
    res.redirect("/");
  });
});

// Auth Failure
router.get("/failure", (req, res) => {
  res.send("Failed to authenticate.");
});

export default router;
