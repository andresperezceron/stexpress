import express from 'express'

const router = express.Router();

router.get("/login", (req, res) => { res.redirect("/") });
router.get("/users", (req, res) => { res.redirect("/") });
router.get("/todo", (req, res) => { res.redirect("/") });

export default router;
