var app = angular.module('dashboard',['ngRoute','chart.js']);

app.config(function($routeProvider) {
  $routeProvider.when('/',                  {templateUrl: 'assets/views/dashboard.html', reloadOnSearch: false});
  $routeProvider.when('/customers',         {templateUrl: 'assets/views/customers.html', reloadOnSearch: false});
  $routeProvider.when('/custdtls',          {templateUrl: 'assets/views/customerdtls.html', reloadOnSearch: false});
  $routeProvider.when('/dashboard',         {templateUrl: 'assets/views/dashboard.html', reloadOnSearch: false});
  $routeProvider.when("/products",  {templateUrl: 'assets/views/products.html', reloadOnSearch: false});
  $routeProvider.when("/faqs",  {templateUrl: 'assets/views/faqs.html', reloadOnSearch: false});
  $routeProvider.when("/locations",  {templateUrl: 'assets/views/locations.html', reloadOnSearch: false});
  $routeProvider.when("/chats",  {templateUrl: 'assets/views/chats.html', reloadOnSearch: false});
  $routeProvider.when("/services",  {templateUrl: 'assets/views/services.html', reloadOnSearch: false});
  $routeProvider.when("/offers",  {templateUrl: 'assets/views/offers.html', reloadOnSearch: false});
  $routeProvider.when("/multimedia",  {templateUrl: 'assets/views/multimedia.html', reloadOnSearch: false});
  $routeProvider.when("/agents",  {templateUrl: 'assets/views/agents.html', reloadOnSearch: false});
}); /* app.config */


app.run(function($rootScope, $http){


      $rootScope.onClickTab = function (tab) {
        $rootScope.currentTab = tab.url;
      }

      $rootScope.isActiveTab = function(tabUrl) {
          return tabUrl == $rootScope.currentTab;
      }

});

/*---- appCtrl : <reason> ---*/
app.controller('appCtrl',function($rootScope,$scope,$location){

  $scope.init = function(){
  };

  $rootScope.route = function(page){
    console.log(page);
    $rootScope.sidebaractive = page;
    $location.path(page);
  };

  $rootScope.gotoDetail = function(item, page){
    console.log(item)
    $rootScope.selected = item;
    $location.path(page)
  }

});

/* ---sideBarCtrl : for sidebar --*/

app.controller('sideBarCtrl',function($scope, $rootScope){
  $rootScope.sidebaractive = '';
  $scope.sidebarcontents = {
    "main" : [
                {"title":"OVERVIEW",
                 "contents":[
                              {"title":"Dashboard","url":"dashboard","icon":"fa fa-dashboard"},
                              {"title":"Chats","url":"chats","icon":"fa fa-comments-o"},
                              {"title":"Customers","url":"customers","icon":"fa fa-user"}
                            ]
                },
                {"title":"BOTS",
                 "contents":[
                              {"title":"Website Bot","url":"devices","icon":"fa fa-cloud"},
                              {"title":"Facebook","url":"bots","icon":"fa fa-facebook"}
                            ]
                },
                {"title":"KNOWLEDGE BANK",
                 "contents":[
                              {"title":"Products","url":"products","icon":"fa fa-product-hunt"},
                              {"title":"Services","url":"services","icon":"fa fa-handshake-o"},
                              {"title":"Offers","url":"offers","icon":"fa fa-tags"},
                              {"title":"FAQs","url":"faqs","icon":"fa fa-question-circle-o"},
                              {"title":"Locations","url":"locations","icon":"fa fa-map-marker"},
                              {"title":"Multimedia","url":"multimedia","icon":"fa fa-file-image-o"}
                            ]
                }
                 ,
                 {"title":"ADMIN",
                  "contents":[
                               {"title":"Agents","url":"agents","icon":"fa fa-users"}
                             ]
                 }
              ]
  }

});

/* -- dashboardCtrl -- */
app.controller('dashboardCtrl',function($rootScope,$scope,$location){

});

/* -- customerCtrl ---*/

app.controller('customerCtrl',function($rootScope,$scope,$location){

  $scope.init = function(){

    $scope.searchKey = '';
    $scope.filterKey = '';
    $scope.filterby = 'Choose Filter';
    $scope.newcustomer = false;
  }


});

/* -- custdtlsCtrl: customer details controller */

app.controller('custdtlsCtrl', function ($scope,$rootScope) {

  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Activity Log',
        url: 'assets/views/activitylog.html'
      }, {
        title: 'Add note',
        url: 'assets/views/addnote.html'
      }
    ];
    $rootScope.currentTab = 'assets/views/activitylog.html';
    }

});

/* -- productsCtrl : --*/

app.controller("productsCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Products',
        url: 'assets/views/productList.html'
      }, {
        title: 'Add New',
        url: 'assets/views/addProduct.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/productList.html';
  };/* init() */

});

/*-- productListCtrl ---*/

app.controller("productListCtrl", function($scope, $rootScope){
    $scope.init = function(){
      // initilization variables
    };
})

/* -- faqCtrl : --*/

app.controller("faqCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'FAQs',
        url: 'assets/views/faqList.html'
      }, {
        title: 'Add New',
        url: 'assets/views/addFaq.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/faqList.html';
  };/* init() */

});
/* -- faqListCtrl : --*/

app.controller("faqListCtrl", function($scope,$rootScope, $http){
   $scope.letterLimit = 100;
$scope.faqs=true;
});
/* -- locationCtrl : --*/

app.controller("locationCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Locations',
        url: 'assets/views/locationList.html'
      }, {
        title: 'Add New',
        url: 'assets/views/addLocation.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/locationList.html';
  };/* init() */

});

/*-- locationListCtrl: --*/
app.controller("locationListCtrl", function($scope, $rootScope){
    $scope.init = function(){
      // initilization variables
    };
})

/* -- offersCtrl : --*/

app.controller("offersCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Offers',
        url: 'assets/views/offerList.html'
      }, {
        title: 'Add New',
        url: 'assets/views/addOffer.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/offerList.html';
  };/* init() */

});
/*-- offersCtrl : --*/
app.controller("offerListCtrl", function($scope, $rootScope){
    $scope.init = function(){
      // initilization variables
    };
})
/* -- servicesCtrl : --*/

app.controller("servicesCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Services',
        url: 'assets/views/serviceList.html'
      }, {
        title: 'Add New',
        url: 'assets/views/addService.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/serviceList.html';
  };/* init() */

});

/* -- multimediaCtrl : --*/

app.controller("multimediaCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Multimedia Files',
        url: 'assets/views/multimediaList.html'
      }, {
        title: 'Add New',
        url: 'assets/views/addMultimedia.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/multimediaList.html';
  };/* init() */

});


/* -- chatCtrl : --*/

app.controller("chatCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Customer Messages',
        url: 'assets/views/chatList.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/chatList.html';
  };/* init() */

});

/* -- chatListCtrl : --*/

app.controller("chatListCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
  
  };/* init() */

});

/* -- agentCtrl : --*/

app.controller("agentCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
      {
        title: 'Agents',
        url: 'assets/views/agentList.html'
      },
      {
        title: 'Add New',
        url: 'assets/views/addAgent.html'
      }
    ];
      $rootScope.currentTab = 'assets/views/agentList.html';
  };/* init() */

});
