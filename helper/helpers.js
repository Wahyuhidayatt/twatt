// var OAuth = require('oauth');
//
// var oauth = new OAuth.OAuth(
//     'https://api.twitter.com/oauth/request_token',
//     'https://api.twitter.com/oauth/access_token',
//     'TLGmM57uOhQn8Xhqf2IZ3LwRa',
//     '0uEgTaPmGp0uhIWLVLWs9K1jIfK34afN9bihD4f21ZcA9hYg6p',
//     '1.0A',
//     null,
//     'HMAC-SHA1'
//   );
// var getTwit = function () {
//   oauth.get(
//     'https://api.twitter.com/1.1/trends/place.json?id=23424977',
//     '836421347693645827-s5iFfii3RW8Y79m8t1MEMQUyOZjRCyh', //test user token
//     'zBGzr4ABkxqK6UzQdWmN1ysD92gQZ44V10w5FLSjE5Ome', //test user secret
//     function (e, data, res){
//       if (e) console.error(e);
//       console.log(require('util').inspect(data));
//     });
//
// module.exports = {
//   getTwit
// }
