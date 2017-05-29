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


    $rootScope.products = [
      {avail:true, img:"/rytbot-wireframe/assets/images/1.jpg", name:"Pager", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:7500, tags:["product", "pager", "retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:false, img:"/rytbot-wireframe/assets/images/2.jpg", name:"Kitchenware : Some utensils", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:2600, tags:['product',"kitchen items"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:true, img:"/rytbot-wireframe/assets/images/4.png", name:"DSLR Cannon Awesomeness", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:32999, tags:["product","camera", "dslr", "great pictures", "most liked"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:false, img:"/rytbot-wireframe/assets/images/3.png", name:"Retro Camera", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:17250, tags:["product", "camera","retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
    ]

     $rootScope.offers = [
      {avail:true, img:"/rytbot-wireframe/assets/images/1.jpg", name:"Pager", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:7500, offprice:6500, tags:["product", "pager", "retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:false, img:"/rytbot-wireframe/assets/images/2.jpg", name:"Kitchenware : Some utensils", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:2600, offprice:2000, tags:['product',"kitchen items"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:true, img:"/rytbot-wireframe/assets/images/4.png", name:"DSLR Cannon Awesomeness", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:32999, offprice:30000, tags:["product","camera", "dslr", "great pictures", "most liked"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:false, img:"/rytbot-wireframe/assets/images/3.png", name:"Retro Camera", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:17250, offprice:16500, tags:["product", "camera","retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
    ]


$rootScope.locations = [
      {avail:true,  location:"Kormangala", city:"Bangalore", country:"India", updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},
      {avail:true,  location:"Indiranagar", city:"Bangalore", country:"India", updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},
      {avail:false, location:"BTM Layout", city:"Bangalore", country:"India", updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},
      {avail:true,  location:"WhiteField", city:"Bangalore", country:"India", updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},

       ]



    // ALL Dummy Data before this line.

});

    
