app.controller('dummydataCtrl',function($scope, $rootScope){

    // All Dummy Data after this line

    // Diksha start

    
    // Diksha end
    // Anjan start

    
    // Anjan end
    // Dharmendra start

    
    // Dharmendra end
    // Vishnu start

    
    // Vishnu end

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

 $rootScope.faqlist = [{
   
      id:'0001',//id for faqlist
      que: 'How do I create a bot?',
      ans: 'Creating Telegram bots is super-easy, but you will need at least some skills at computer programming. In order for a bot to work, set up a bot account with @BotFather, then connect it to your backend server via our API',
      author: 'core.telegram.org',
      status: true,
      attachment:{ type:"img",src: "assets/img/usericon.png"},
      tag:{id:"01",tags:"how can i help you"},
      ref:"https://rytangle.com",
       LS: '1496060971'
  
  },
  {
    
      id:'0002',//id for faqlist
      que: 'How do I get updates?',
      attachment: {type:"video",src: "assets/img/movie.ogg"},
      ans: 'There are currently two ways of getting updates. You can either use long polling or Webhooks. Please note that it\'s not possible to get updates via long polling while an outgoing Webhook is set',
      author: 'core.telegram.org',
      status: true,
      ref:"",
      tag:{id:"01",tags:"how can i help you"},
       LS: '1496058793'
  
  },
  {
  
      id:'0003',//id for faqlist
      que: 'I\'m having trouble with my self-signed certificate!',
      attachment: {type:"audio", src: "assets/img/sound.ogg"},
      ans: 'Please take a look at this self-signed certificate guide we made just for you. If you\'ve read it and still have a question, ping us on botsupport.',
      author: 'rytangle team',
      tag:{id:"01",tags:"how can i help you"},
      ref:"https://anjan.com",
      status: false, LS: '1496058746'
    
  },
  {
      id:'0004',//id for faqlist
      que: 'How can I make requests in response to updates?',
      attachment: "link",
      tag:{id:"01",tags:"how can i help you"},
      ans: 'This is possible if you‘re using webhooks. The upside is that you need less requests, the downside — that in this case it’s not possible to know that such a request was successful or get its result.',
      author: 'rytangle team',
      ref:"https:/gmail.com",
      status: false, src: "https://rytangle.com", LS: '1406058746'
    
  }];



    $rootScope.products = [
      {id:'0001',avail:true, img:"/rytbot-wireframe/assets/images/1.jpg", name:"Pager", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:7500, tags:["product", "pager", "retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {id:'0002',avail:false, img:"/rytbot-wireframe/assets/images/2.jpg", name:"Kitchenware : Some utensils", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:2600, tags:['product',"kitchen items"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {id:'0003',avail:true, img:"/rytbot-wireframe/assets/images/4.png", name:"DSLR Cannon Awesomeness", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:32999, tags:["product","camera", "dslr", "great pictures", "most liked"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {id:'0004',avail:false, img:"/rytbot-wireframe/assets/images/3.png", name:"Retro Camera", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:17250, tags:["product", "camera","retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
    ];

    $rootScope.chats = [
      {id:'0001',status:"active",pic:'/rytbot-wireframe/assets/img/usericon.png',custId:"123456", name:"Rahul Mishra" , msg:"Hey last time the price was 23 $", agent:'bot', platform:'web' ,updateTs:1496050225},
      {id:'0002',status:"away",pic:'/rytbot-wireframe/assets/images/flash.png',custId:"123457", name:"Flash Gordon" , msg:"Do you know I am a superfast hero", agent:'bot', platform:'facebook' ,updateTs:1496050225},
      {id:'0003',status:"struggling",pic:'/rytbot-wireframe/assets/images/superman.jpg',custId:"123458", name:"Super Mann" , msg:"I am asking a tough question that you'll ask for human help", agent:'bot', platform:'facebook' ,updateTs:1496050225},
      {id:'0004',status:"active",pic:'/rytbot-wireframe/assets/img/usericon.png',custId:"123459", name:"Some Guy" , msg:"Whats your best price", agent:'Vinod', platform:'web' ,updateTs:1496050225},
      {id:'0005',status:"offline",pic:'/rytbot-wireframe/assets/img/usericon.png',custId:"123459", name:"Some Other Guy" , msg:"I'll check and may be come back later", agent:'Byomkesh Bakshi', platform:'web' ,updateTs:1496050225, feedback:"like"}
    ];


     $rootScope.offers = [
      {avail:true, img:"/rytbot-wireframe/assets/images/1.jpg", name:"Pager", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:7500, offprice:6500, tags:["product", "pager", "retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:false, img:"/rytbot-wireframe/assets/images/2.jpg", name:"Kitchenware : Some utensils", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:2600, offprice:2000, tags:['product',"kitchen items"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:true, img:"/rytbot-wireframe/assets/images/4.png", name:"DSLR Cannon Awesomeness", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:32999, offprice:30000, tags:["product","camera", "dslr", "great pictures", "most liked"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {avail:false, img:"/rytbot-wireframe/assets/images/3.png", name:"Retro Camera", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", bprice:17250, offprice:16500, tags:["product", "camera","retro"], otherspecs:[], updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
    ]

    $rootScope.locations = [
      {id:"001",avail:true,img:"/rytbot-wireframe/assets/images/loc1.jpg",address:"1st Main Rd, Electronics City Phase 1",  location:"Kormangala", city:"Bangalore", country:"India",zip:"560089",contact:9845641201, updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},
      {id:"002",avail:true,img:"/rytbot-wireframe/assets/images/loc2.jpg",address:"2nd Main Rd, Electronics City Phase 1",  location:"Indiranagar", city:"Bangalore", country:"India",zip:"560069",contact:9845541221, updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},
      {id:"003",avail:false,img:"/rytbot-wireframe/assets/images/loc3.jpg",address:"1st Main Rd, Electronics City Phase 2", location:"BTM Layout", city:"Bangalore", country:"India",zip:"560064",contact:9844641221, updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},
      {id:"004",avail:true,img:"/rytbot-wireframe/assets/images/loc4.jpg",address:"2ns Main Rd, Electronics City Phase 2",  location:"WhiteField", city:"Bangalore", country:"India",zip:"560008",contact:9845641221, updateTs:1496050225,longitude:"77.6271° E",latitude:"12.9279° N",},
       ]

   $rootScope.agents = [
     {id:'0001', pic:'/rytbot-wireframe/assets/images/flash.png',status:"active", name:"Flash Gordon", chats:224, lastTs:1496127568, likes:120, dislikes:40} ,
     {id:'0002', pic:'/rytbot-wireframe/assets/images/superman.jpg', status:"idle", name:"Superman", chats:176, lastTs:1496127468, likes:80, dislikes:23} ,
     {id:'0003', pic:'/rytbot-wireframe/assets/images/nagraj.jpg', status:"offline", name:"Naag Raj", chats:283, lastTs:1496127368, likes:180, dislikes:60} ,
     {id:'0004', pic:'/rytbot-wireframe/assets/images/mickey.png', status:"idle", name:"Mickey Mishra", chats:89, lastTs:1496127518, likes:25, dislikes:10} 
      ]

    $rootScope.multimedias = [
      {id:'0001',avail:true, img:"/rytbot-wireframe/assets/images/1.jpg", name:"Pager-2", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:7500, tags:["product", "pager", "retro"], type:"Image", size:"3.3MB", updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {id:'0002',avail:false, img:"/rytbot-wireframe/assets/images/videotnimage.jpg", name:"Kitchenware Promo Video", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:2600, tags:['product',"kitchen items"],type:"Video", size:"17MB", updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {id:'0003',avail:true, img:"/rytbot-wireframe/assets/images/texttnimage.png", name:"DSLR Specs document", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:32999, tags:["product","camera", "dslr", "great pictures", "most liked"], size:"4.6Kb", type:"Text", updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
      {id:'0004',avail:false, img:"/rytbot-wireframe/assets/images/3.png", name:"Retro Camera", shortdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus.", price:17250, tags:["product", "camera","retro"], type:"Image", size:"1.7MB", updateTs:1496050225,longdesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci orci, sollicitudin eu est metus."},
    ];

 
    // ALL Dummy Data before this line.

});
