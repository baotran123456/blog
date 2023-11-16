class NewController {
  //GET /news
  index(req, res) {
    res.render('news');
  }

  // GET /news/:chitiet
  show(req, res) {
    res.send('chitiet');
  }
}

module.exports = new NewController();
