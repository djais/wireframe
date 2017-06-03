var app = angular.module('dashboard', ['ngRoute', 'ngTagsInput']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', { templateUrl: 'assets/views/dashboard.html', reloadOnSearch: false });
  $routeProvider.when('/customers', { templateUrl: 'assets/views/customers.html', reloadOnSearch: false });
  $routeProvider.when('/custdtls', { templateUrl: 'assets/views/customerdtls.html', reloadOnSearch: false });
  $routeProvider.when('/dashboard', { templateUrl: 'assets/views/dashboard.html', reloadOnSearch: false });
  $routeProvider.when('/chartflow', { templateUrl: 'assets/views/chartflow.html', reloadOnSearch: false });
  $routeProvider.when('/webbots', { templateUrl: 'assets/views/webbots.html', reloadOnSearch: false });
  $routeProvider.when('/fbbots', { templateUrl: 'assets/views/fbbots.html', reloadOnSearch: false });
  $routeProvider.when("/products", { templateUrl: 'assets/views/products.html', reloadOnSearch: false });
  $routeProvider.when("/faqs", { templateUrl: 'assets/views/faqs.html', reloadOnSearch: false });
  $routeProvider.when("/locations", { templateUrl: 'assets/views/locations.html', reloadOnSearch: false });
  $routeProvider.when("/chats", { templateUrl: 'assets/views/chats.html', reloadOnSearch: false });
  $routeProvider.when("/services", { templateUrl: 'assets/views/services.html', reloadOnSearch: false });
  $routeProvider.when("/offers", { templateUrl: 'assets/views/offers.html', reloadOnSearch: false });
  $routeProvider.when("/multimedia", { templateUrl: 'assets/views/multimedia.html', reloadOnSearch: false });
  $routeProvider.when("/agents", { templateUrl: 'assets/views/agents.html', reloadOnSearch: false });
  $routeProvider.when("/addproduct", { templateUrl: 'assets/views/addProduct.html', reloadOnSearch: false });
  $routeProvider.when("/addfaq", { templateUrl: 'assets/views/addFaq.html', reloadOnSearch: false });
  $routeProvider.when("/addlocation", { templateUrl: 'assets/views/addLocation.html', reloadOnSearch: false });
  $routeProvider.when("/addservice", { templateUrl: 'assets/views/addService.html', reloadOnSearch: false });
  $routeProvider.when("/addoffer", { templateUrl: 'assets/views/addOffer.html', reloadOnSearch: false });
  $routeProvider.when("/addmultimedia", { templateUrl: 'assets/views/addMultimedia.html', reloadOnSearch: false });
  $routeProvider.when("/addagent", { templateUrl: 'assets/views/addAgent.html', reloadOnSearch: false });
  $routeProvider.when("/editfaq", { templateUrl: 'assets/views/editFaq.html', reloadOnSearch: false });
  $routeProvider.when("/editlocation", { templateUrl: 'assets/views/editLocation.html', reloadOnSearch: false });
  $routeProvider.when("/editOffer", { templateUrl: 'assets/views/editOffer.html', reloadOnSearch: false });
  $routeProvider.when("/editProduct", { templateUrl: 'assets/views/editProduct.html', reloadOnSearch: false });
  $routeProvider.when("/faqlist", { templateUrl: 'assets/views/faqList.html', reloadOnSearch: false });
  $routeProvider.when("/agentedit",        {templateUrl: 'assets/views/agentedit.html', reloadOnSearch: false});
  $routeProvider.when("/agentdetail",     {templateUrl: 'assets/views/agentDetail.html', reloadOnSearch: false});
}); /* app.config */



app.directive("ngFileSelect", function (fileReader, $timeout) {
  return {
    scope: {
      ngModel: '='
    },
    link: function ($scope, el) {
      function getFile(file) {
        fileReader.readAsDataUrl(file, $scope)
          .then(function (result) {
            $timeout(function () {
              $scope.ngModel = result;
            });
          });
      }

      el.bind("change", function (e) {
        var file = (e.srcElement || e.target).files[0];
        getFile(file);
      });
    }
  };
});/* ngFileSelect */


 // app.service("addtab", function(tabs,newtab){
 //  this.add=function(tabs,newtab){
 //    var result = {};
 //    if(tabs.length<$rootScope.maxchats){
 //      tabs.push(newtab);
 //      $rootScope.onClickTab(newtab);
 //      result.tabs = tabs;
 //    }
 //    else
 //      result.error = "You have opened maximum number of chats. Close any to open new.";
 //    console.log("addtab result",result);
 //    return result;
 //  }
 // })

 app.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function (reader, deferred, scope) {
    return function () {
      scope.$apply(function () {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function (reader, scope) {
    return function (event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function (deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function (file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});

  // app.service("addorrem",function(){
  //   this.add = function(scope,newtab){
  //     if($rootScope.tabidarr.length){
  //       var index = $rootScope.tabidarr.indexOf(newdata.id);
  //       if(index>-1){
  //         $rootScope.onClickTab(newdata);
  //         return false;
  //       }
  //     }
  //     if(scope.tabs.length<$rootScope.maxtabs){
  //       $rootScope.tabidarr.push(newdata.id);
  //       scope.tabs.push(newdata);
  //       $rootScope.currentTab = newdata.url;
  //       $rootScope.onClickTab(newdata);
  //     }
  //     else
  //       $rootScope.taberror = "You have opened maximum number of chats. Close any to open new.";
  //   }
  // })

 // app.factory('xyz', function($scope){
 //  var xyz = function(){
 //    $scope.x = "jgugiubuih";
 //    // $rootScope.y = "kjhiugugugiuhohoyyyyyyyyyy";
 //    console.log("hai$$$$$$$$$$$$$$$");
 //    console.log($scope.x)
 //    // console.log($rootScope.y)
 //    // return true;
 //  }
 // })

 app.directive('hcPieChart', function () {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
      title: '@',
      data: '='
    },
    link: function (scope, element) {
      Highcharts.chart(element[0], {

        responsive: {
          rules: [{
            condition: {
              maxWidth: 300
            },
            chartOptions: {
              legend: {
                enabled: true
              }
            }
          }]
        },

        chart: {
          height: 300,
          width: 300,
          spacingBottom: 15,
          spacingTop: 0,
          spacingLeft: 10,
          spacingRight: 100,
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },

        title: {
          text: scope.title
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {

            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true,
            animation: false
          }
        },
        series: [{
          data: scope.data
        }],
        exporting: {
          enabled: false
        },
        credits: {
          enabled: false
        }
      });
    }
  };
})

 app.directive('hcChart', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div></div>',
    scope: {
      config: '='
    },
    link: function (scope, element, attrs) {



      var chart;
      var process = function () {
        var defaultOptions = {
          chart: { renderTo: element[0] },
        };
        var config = angular.extend(defaultOptions, scope.config);
        chart = new Highcharts.Chart(config);
      };
      process();
      scope.$watch("config.series", function (loading) {
        process();
      });
      scope.$watch("config.loading", function (loading) {
        if (!chart) {
          return;
        }
        if (loading) {
          chart.showLoading();
        } else {
          chart.hideLoading();
        }
      });
    }
  };
})
 
/*---- appCtrl : <reason> ---*/
app.controller('appCtrl',function($rootScope,$scope,$location){

  $scope.init = function(){
    $rootScope.maxtabs = 4;
    $rootScope.tabidarr = [];
    $rootScope.selected = null;
    $rootScope.taberror = "";
  };

  $rootScope.onClickTab = function (tab) {
    if(tab.id && $rootScope.currentid != tab.id){
      $rootScope.currentid = tab.id;
    }
    $rootScope.currentTab = tab.url;
    if(tab.mainobj)
      $rootScope.selected  = tab.mainobj;
  }

  $rootScope.isActiveTab = function(tab) {
    if(tab.id){
      if(tab.url == $rootScope.currentTab && tab.id == $rootScope.currentid)
        return true
      return false
    }
    return tab.url == $rootScope.currentTab;
  }

  $rootScope.route = function(page){
    console.log(page);
    $rootScope.sidebaractive = page;
    $location.path(page);
  };

  $rootScope.gotoDetail = function (item, page) {
    console.log(item)
    $rootScope.selected = item;
    $location.path(page)
  };

  $scope.checktaberror = function(){
    if($rootScope.taberror=='')
      return false;
    return true;
  }

  $scope.closetaberror = function(){
    $rootScope.taberror = '';
  }

  $rootScope.addorremove = function(scope,newdata){
    $rootScope.taberror = "";
    if(newdata.mainobj){
      $rootScope.selected  = newdata.mainobj;
      console.log("selected ",$rootScope.selected);
    }
    if($rootScope.tabidarr.length){
      var index = $rootScope.tabidarr.indexOf(newdata.id);
      if(index>-1){
        $rootScope.onClickTab(newdata);
        return false;       
      }
    }
    if(scope.tabs.length<$rootScope.maxtabs){
      $rootScope.tabidarr.push(newdata.id);
      scope.tabs.push(newdata);
      $rootScope.currentTab = newdata.url;
      $rootScope.onClickTab(newdata);
    }
    else{
      $rootScope.taberror = "You have opened maximum number of chats. Close any to open new.";
      // $rootScope.$digest();
      // $rootScope.$apply();
    }
    console.log($rootScope.taberror);
  }

});// appCtrl


 app.controller('sideBarCtrl',function($scope, $rootScope){
  $rootScope.sidebaractive = '';
  $scope.sidebarcontents = {
    "main" : [
    {"title":"OVERVIEW",
    "contents":[
    {"title":"Dashboard","url":"dashboard","icon":"fa fa-dashboard"},
    {"title":"Chatflow","url":"chartflow","icon":"fa fa-arrow-right"},
    {"title":"Chats","url":"chats","icon":"fa fa-comments-o"},
    {"title":"Customers","url":"customers","icon":"fa fa-user"}
    ]
  },
  {"title":"BOTS",
  "contents":[
  {"title":"Website Bot","url":"webbots","icon":"fa fa-cloud"},
  {"title":"Facebook","url":"fbbots","icon":"fa fa-facebook"}
  ]
},
{"title":"KNOWLEDGE BANK",
"contents":[
{"title":"Products","url":"products","icon":"fa fa-product-hunt"},
                              // {"title":"Services","url":"services","icon":"fa fa-handshake-o"},
                              {"title":"Offers","url":"offers","icon":"fa fa-tags"},
                              {"title":"FAQs","url":"faqs","icon":"fa fa-question-circle-o"},
                              {"title":"Locations","url":"locations","icon":"fa fa-map-marker"},
                              {"title":"Multimedia","url":"multimedia","icon":"fa fa-file-image-o"}
                              ]
                            }
                            ,
                            {"title":"TEAM",
                            "contents":[
                            {"title":"Agents","url":"agents","icon":"fa fa-users"}
                            ]
                          }
                          ]
                        }

                      }); // sidebarCtrl





/* -- customerCtrl ---*/

app.controller('customerCtrl', function ($rootScope, $scope, $location) {

  $scope.init = function () {

    $scope.searchKey = '';
    $scope.filterKey = '';
    $scope.filterby = 'Choose Filter';
    $scope.newcustomer = false;
  }


});

/* -- custdtlsCtrl: customer details controller */

app.controller('custdtlsCtrl', function ($scope, $rootScope) {

  $scope.init = function () {
    $scope.tabs = [
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

app.controller("productsCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
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

app.controller("productListCtrl", function($scope, $rootScope,$location,$http){

    $scope.init = function(){
    };
    $scope.editProduct= function (id) {
      $rootScope.ProductId = id;
      $rootScope.products.id = $scope.getProductListId();
      console.log(id)                    // initilization variables
    };

$scope.getProductListId = function () {
  for(var index=0;index < $rootScope.products.length; index++){
    if($rootScope.products[index].id == $rootScope.ProductId){
      $scope.display =  $rootScope.products[index];
    };
     console.log($rootScope.ProductId);
    $location.path("editProduct");
  };

};

  $scope.save = function () {
//$location.path("products");
$rootScope.addProduct = $rootScope.products.id;
for(var index = 0; index < $rootScope.products.length; index++){
  if($rootScope.products[index].id == $rootScope.addProduct){
    $rootScope.products[index] = $rootScope.products[index];
  }
}
//$location.path('products');
$rootScope.onClickTab($scope.tabs[0]);

};
$scope.cancelProduct = function () {
  $location.path('products');
};
$scope.delete = function (id) {
  $rootScope.products.splice(id,1);

};


})
/*-- addProductCtrl--*/
app.controller("addProductCtrl", function($scope, $rootScope,$location,$http,$window){
  $scope.init = function () {
  };
  $scope.submit = function () {
    console.log("hello world")
    console.log(i);
    $rootScope.addproduct = {
      name:$scope.name,
      shortdesc:$scope.sdesc,
      longdesc:$scope.ldesc,
      tags:$scope.tags,
      attachment:$scope.imageSrc,
      price:$scope.price
    }
  $rootScope.products.push($rootScope.addproduct);
  $location.path('products');
  };
  $scope.leadme = function () {
    console.log("lead me icon clicked")
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  };
  $scope.tags = [
  ];

})

/* -- offersCtrl : --*/

app.controller("offersCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
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
app.controller("offerListCtrl", function($scope, $rootScope,$location,$http){
    $scope.init = function(){
      // initilization variables
    };
    $scope.editOffer= function (id) {
      $rootScope.offer = id;
      $rootScope.offers.id = $scope.getOfferListId();
      console.log(id)                    // initilization variables
    };

  $scope.getOfferListId = function () {
  for(var index=0;index < $rootScope.offers.length; index++){
    if($rootScope.offers[index].id == $rootScope.offer){
      $scope.display =  $rootScope.offers[index];

    }
     console.log($rootScope.offer);
    $location.path("editOffer");
  }

  };

  $scope.save = function () {
  //$location.path("products");
  $rootScope.addOffer = $rootScope.offers.id;
  for(var index = 0; index < $rootScope.offers.length; index++){
    if($rootScope.offers[index].id == $rootScope.addOffer){
      $rootScope.offers[index] = $rootScope.offers[index];
    }
  }
  $rootScope.onClickTab($scope.tabs[0]);
  //$location.path('offers');
  };

  $scope.delete = function (id) {
    $rootScope.offers.splice(id,1);

  };

})

/*-addofferCtrl-*/
app.controller("addofferCtrl", function($scope, $rootScope,$http,$location) {
  $scope.init = function () {
  console.log("hello offers")
  console.log("hi");
};
  $scope.submit = function () {
    console.log("hello world")
    console.log(i);
    $rootScope.addoffer = {
      name:$scope.name,
      shortdesc:$scope.sdesc,
      longdesc:$scope.ldesc,
      tags:$scope.tags,
      attachment:$scope.imageSrc,
      bprice:$scope.bprice,
      offprice:$scope.offprice,
      validity:$scope.validity
    }
  $rootScope.offers.push($rootScope.addoffer);
  $location.path('products');
};
})
/* -- servicesCtrl : --*/

app.controller("servicesCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
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

app.controller("multimediaCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
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
/* -- multimediaListCtrl : --*/
app.controller("multimediaListCtrl", function ($scope, $rootScope, $http) {
  $scope.letterLimit = 100;
  $scope.multimedia = true;
});



/* -- webbotsCtrl : --*/

app.controller("webbotsCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
      {
        title: 'My Webbot',
        url: 'assets/views/mywebbot.html'
      },
      {
        title: 'Bot Knowledge',
        url: 'assets/views/botknowledge.html'
      }
    ];
    $rootScope.currentTab = 'assets/views/mywebbot.html';
    $scope.botscript = "<script src='https://bots.rytangle.com/temp?75942114533548'></script>"
  };/* init() */

});


/* -- webbotsCtrl : --*/

app.controller("fbbotsCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
      {
        title: 'Facebook Bot Pages',
        url: 'assets/views/myfbbotpages.html'
      },
      {
        title: 'Login to Facebook',
        url: 'assets/views/loginfb.html'
      }
    ];
    $rootScope.currentTab = 'assets/views/myfbbotpages.html';
  };/* init() */

});
