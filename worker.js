var request = require('request');

const trackEvent = (category, action, label, value) => {

    const data = {
        v: '1',
        tid: 'UA-192871103-1',
        cid: '51b59083-535e-4f9f-9863-c1739cc5ffc9',
        t: 'event',
        ec: category,
        ea: action,
        cm2 : 125555
    };

    const url = 'https://www.google-analytics.com/collect';

    request({url:url, qs:data}, function(err, response, body) {
        console.log(response.statusCode);
    });
};

trackEvent(
    'SuperEvent',
    'Example',
    'Example',
    '100'
  );