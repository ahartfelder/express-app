import Router from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('home/index', { title: 'Home' });
});

router.get('/about', (req, res) => {
    res.render('home/about', { title: 'About' });
});

export default router;