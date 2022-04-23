const controller = {};

controller.test = (req, res) => {
  res.json({ data: "Testing response from backend" });
};

export default controller;
