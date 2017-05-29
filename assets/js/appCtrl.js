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
                              {"title":"Customers","url":"customers","icon":"fa fa-user"},
                              // {"title":"Tickets","url":"tickets","icon":"fa fa-edit"},
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

/*--- TabsCtrl --- <Make it a factory function>*/

app.controller('TabsCtrl', function ($scope,$rootScope) {

  $scope.tabs = {
    "customers":[
      {
        title: 'Activity Log',
        url: 'assets/views/activitylog.html'
      }, {
        title: 'Add note',
        url: 'assets/views/addnote.html'
      }
    ],
    "products":[
      {
        title: 'Products',
        url: 'assets/views/productList.html'
      }, {
        title: 'Add New',
        url: 'assets/views/addProduct.html'
      }
    ]
  };/* scope.tabs */



    $rootScope.onClickTab = function (tab) {
      console.log("onClickTab")
      console.log(tab)
      console.log(tab.url)
      $rootScope.currentTab = tab.url;
      console.log($scope.currentTab)
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
});

/* Other controller */



app.controller('custdtlsCtrl', function ($scope,$rootScope) {

  $scope.init = function(){
    $rootScope.currentTab = 'assets/views/activitylog.html';
    }

});

/* -- productsCtrl : --*/

app.controller("productsCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
      $rootScope.currentTab = 'assets/views/productList.html';
  };/* init() */

});
