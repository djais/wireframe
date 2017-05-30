app.controller('dummydataCtrl', function ($scope, $rootScope) {

  // All Dummy Data after this line

  $rootScope.storehead = [
    { name: 'Position', fld: 'source' },
    { name: 'Location', fld: 'keyParam' },
    { name: 'Total Feedbacks', fld: 'sentiment' },
    { name: 'positive', fld: 'concerns' },
    { name: 'negative', fld: 'location' },
    { name: 'NPS', fld: 'time' },
    { name: 'Rating', fld: 'date' }
  ];

  $rootScope.head = [
    { name: 'Name', fld: '' },
    { name: 'Phone', fld: '' },
    { name: 'Email', fld: '' },
    { name: 'Gender', fld: '' },
    { name: 'Age Group', fld: '' },
    { name: 'D.O.B', fld: '' },
    { name: 'Anniversary', fld: '' },
    { name: 'Last Interaction', fld: '' }
    // {name:'Verified',fld:'verification'}
  ];

  $rootScope.customers = [
    { id: '1000', customer: { name: 'Arjun', phone: '9567075891', email: 'arjun@rytangle.com', gender: 'Male', age_group: 'Below 25', dob: '13 Nov', anniversary: '30 Sep', lastinteraction: 'Jan 22' }, meta: { total_interactions: '2', avgRating: '2' }, interactions: [{ date: '03-Sept-16', Source: 'Chatbot', Location: '', Detail: 'Deals in watches' }, { date: '04-Sept-16', Source: 'Device', Location: 'Fastrack Indiranagar', Detail: 'FB ID 100' }] },
    { id: '1001', customer: { name: 'Rahul', phone: '9980159797', email: 'rahul@rytangle.com', gender: 'Male', age_group: 'Above 25', dob: '16 May', anniversary: '20 June', lastinteraction: 'Jan 21' }, meta: { total_interactions: '2', avgRating: '2' }, interactions: [{ date: '03-Sept-16', Source: 'Chatbot', Location: '', Detail: 'Deals in watches' }, { date: '04-Sept-16', Source: 'Device', Location: 'Fastrack Indiranagar', Detail: 'FB ID 100' }] },
    { id: '1002', customer: { name: 'Vishnu', phone: '8157891812', email: 'vishnu@rytangle.com', gender: 'Male', age_group: 'Below 25', dob: '20 Apr', anniversary: '16 Nov', lastinteraction: 'Jan 18' }, meta: { total_interactions: '2', avgRating: '2' }, interactions: [{ date: '03-Sept-16', Source: 'Chatbot', Location: '', Detail: 'Deals in watches' }, { date: '04-Sept-16', Source: 'Device', Location: 'Fastrack Indiranagar', Detail: 'FB ID 100' }] }
  ];

  $rootScope.modelfb = { id: '101', customer: { name: 'Rahul', phone: '9611876767', email: 'rahul@rytangle.com', gender: 'Male', age_group: 'Above 25' }, feedback: { npsScore: '3', rating: '5', service: '', facilities: '', staff: '', comment: 'Improve service' }, derived: { source: 'web', keyParam: 'detractor', sentiment: "positive", concerns: ['staff behavior', 'service'], location: 'Bangalore', time: '18:44', date: '13-Jan-17' } };

  // $rootScope.faqlist = [
  //    { id: '100',
  //     faqs: { que: 'what bot do?', 
  //     ans: 'bot does noting but it replies you witout human interaction', 
  //     author: 'rytangle team',
  //      status: false,attachment:"", LS: '04-Sept-17'
  //     }
  //    },

  //    { id: '101', faqs:
  //     { que: 'How do I create a bot?', 
  //     ans: 'Creating Telegram bots is super-easy, but you will need at least some skills at computer programming. In order for a bot to work, set up a bot account with @BotFather, then connect it to your backend server via our API', 
  //     author: 'core.telegram.org',
  //      status: true,
  //      attachment:"", LS: '04-Sept-16'} },


  // ];
  $rootScope.faqlist = [{
    faqs: {
      que: 'How do I create a bot?',
      ans: 'Creating Telegram bots is super-easy, but you will need at least some skills at computer programming. In order for a bot to work, set up a bot account with @BotFather, then connect it to your backend server via our API',
      author: 'core.telegram.org',
      status: true,
      attachment: "file is attached",
      src: "assets/img/usericon.png", LS: '1496060971'
    }
  },
  {
    faqs: {
      que: 'How do I get updates?',
      attachment: "video is attached",
      ans: 'There are currently two ways of getting updates. You can either use long polling or Webhooks. Please note that it\'s not possible to get updates via long polling while an outgoing Webhook is set',
      author: 'core.telegram.org',
      status: true,
      src: "assets/img/movie.ogg", LS: '1496058793'
    }
  },
  {
    faqs: {
      que: 'I\'m having trouble with my self-signed certificate!',
      attachment: "sound is attached",
      ans: 'Please take a look at this self-signed certificate guide we made just for you. If you\'ve read it and still have a question, ping us on botsupport.',
      author: 'rytangle team',
      status: false, src: "assets/img/sound.ogg", LS: '1496058746'
    }
  },
  {
    faqs: {
      que: 'How can I make requests in response to updates?',
      attachment: "link is attached",
      ans: 'This is possible if you‘re using webhooks. The upside is that you need less requests, the downside — that in this case it’s not possible to know that such a request was successful or get its result.',
      author: 'rytangle team',
      status: false, src: "https://rytangle.com", LS: '1406058746'
    }
  }];












  // ALL Dummy Data before this line.

});
