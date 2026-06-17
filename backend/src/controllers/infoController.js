exports.getInfo = (req, res) => {
  res.json({ app: 'Tiny App', environment: 'dev' });
};
