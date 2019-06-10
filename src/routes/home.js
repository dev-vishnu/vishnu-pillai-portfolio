import express from 'express';

const HomeRoutes = express.Router();

HomeRoutes.get('/', (req, res) => {
  res.render('home');
});

export default HomeRoutes;
