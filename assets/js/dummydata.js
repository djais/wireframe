app.controller('dummydataCtrl',function($scope, $rootScope){

    // All Dummy Data after this line

    $rootScope.storehead = [
      {name:'Position', fld:'source'},
      {name:'Location', fld:'keyParam'},
      {name:'Total Feedbacks', fld:'sentiment'},
      {name:'positive', fld:'concerns'},
      {name:'negative', fld:'location'},
      {name:'NPS', fld:'time'},
      {name:'Rating', fld:'date'}
    ];

    $rootScope.head = [
      {name:'Name',fld:''},
      {name:'Phone',fld:''},
      {name:'Email',fld:''},
      {name:'Gender',fld:''},
      {name:'Age Group',fld:''},
      {name:'D.O.B',fld:''},
      {name:'Anniversary',fld:''},
      {name:'Last Interaction',fld:''}
      // {name:'Verified',fld:'verification'}
    ];

    $rootScope.customers = [
      { id: '1000', customer: { name: 'Arjun', phone: '9567075891', email: 'arjun@rytangle.com', gender: 'Male', age_group: 'Below 25', dob: '13 Nov', anniversary: '30 Sep', lastinteraction: 'Jan 22' }, meta: { total_interactions: '2', avgRating: '2' }, interactions: [{ date: '03-Sept-16', Source: 'Chatbot', Location: '', Detail: 'Deals in watches' }, { date: '04-Sept-16', Source: 'Device', Location: 'Fastrack Indiranagar', Detail: 'FB ID 100' }] },
      { id: '1001', customer: { name: 'Rahul', phone: '9980159797', email: 'rahul@rytangle.com', gender: 'Male', age_group: 'Above 25', dob: '16 May', anniversary: '20 June', lastinteraction: 'Jan 21' }, meta: { total_interactions: '2', avgRating: '2' }, interactions: [{ date: '03-Sept-16', Source: 'Chatbot', Location: '', Detail: 'Deals in watches' }, { date: '04-Sept-16', Source: 'Device', Location: 'Fastrack Indiranagar', Detail: 'FB ID 100' }] },
      { id: '1002', customer: { name: 'Vishnu', phone: '8157891812', email: 'vishnu@rytangle.com', gender: 'Male', age_group: 'Below 25', dob: '20 Apr', anniversary: '16 Nov', lastinteraction: 'Jan 18' }, meta: { total_interactions: '2', avgRating: '2' }, interactions: [{ date: '03-Sept-16', Source: 'Chatbot', Location: '', Detail: 'Deals in watches' }, { date: '04-Sept-16', Source: 'Device', Location: 'Fastrack Indiranagar', Detail: 'FB ID 100' }] }
    ];

    $rootScope.modelfb = { id: '101', customer: { name: 'Rahul', phone: '9611876767', email: 'rahul@rytangle.com', gender: 'Male', age_group: 'Above 25' }, feedback: { npsScore: '3', rating: '5', service: '', facilities: '', staff: '', comment: 'Improve service' }, derived: { source: 'web', keyParam: 'detractor', sentiment: "positive", concerns: ['staff behavior', 'service'], location: 'Bangalore', time: '18:44', date: '13-Jan-17' } };












    // ALL Dummy Data before this line.

});
