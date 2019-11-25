var express = require('express');
var Twitter = require('twit');
var app = express();
var cors = require('cors');
require('dotenv').config()
app.use(cors());



const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// Home feed api
app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 100 };
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
});

// topic search api
app.get('/search', (req, res) => {
    var para = req.url.match(/[^=]+$/)[0];
    const params = { q: para, count: 100 };
    client
      .get(`search/tweets`, params)
      .then(timeline => {
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
});

// user feeds api
app.get('/user_timeline', (req, res) => {
  var para = req.url.match(/[^=]+$/)[0];
  const params = { screen_name: para, count: 100 };
  client
    .get(`statuses/user_timeline`, params)
    .then(timeline => {
      res.send(timeline);
    })
    .catch(error => {
    res.send(error);
  });
});

// user search api
app.get('/user_timeline', (req, res) => {
  var para = req.url.match(/[^=]+$/)[0];
  const params = { q: para, count: 100 };
  client
    .get(`users/search`, params)
    .then(timeline => {
      res.send(timeline);
    })
    .catch(error => {
    res.send(error);
  });
});

app.listen(3000, function () {
  console.log('Twitter App listening on port 3000!');
});
