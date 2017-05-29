var app = angular.module('dashboard',['ngRoute']);

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
                            width:300,
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
                                                showInLegend: true
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

 $scope.botdata = [{
                        name: "FB",
                        y: 100
                    }, {
                        name: "Web",
                        y:175,
                        sliced: false,
                        selected: true
                    } 
                     ]

    $scope.sessiondata = [{
                        name: "< 10 min ",
                        y: 56.33
                    }, {
                        name: "> 10 min",
                        y: 24.03,
                        sliced: false,
                        selected: true
                    }, {
                        name: "< 25 min",
                        y: 10.38
                    }]
    $scope.responsedata = [{
                        name: "Buy",
                        y: 15
                    }, {
                        name: "Book Table",
                        y: 3000,
                        sliced: true,
                        selected: true
                    }, {
                        name: "Location",
                        y: 1000
                    }, {
                        name: "Contact",
                        y: 5000
                }]
     $scope.chartConfig = {
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
                        title: {
                text: 'Intention'
            },           
            yAxis: { title: { text: 'Temperature (Celsius)' } },
            tooltip: { valueSuffix: ' celsius' },
            legend: { align: 'center', verticalAlign: 'bottom', borderWidth: 0 },
               plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
              type:'bar',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
            }]
    };




   
console.log("hello Dashboard")

/*Flow-chart start*/
var treeData = [
  {
    "name": "Greeting:1500",
    "parent": "null",
    "children": [
      {
        "name": "Intent 1: 100",
        "parent": "Top Level",
        "children": [
          {
            "name": "Intent 1:100"
            
          },
          {
            "name": "Dropoff:20"
            
          }
        ]
      },
      {
        "name": "Intent 2: 200",
        "children": [
          {
            "name": "Intent 1:100"
            
          },
          {
            "name": "Intent 2:20"
            
          },
          {
            "name": "Dropoff:20"
            
          }
        ]
      },
      {
        "name": "Intent 3: 50"
        
      },

      {
        "name": "Dropoff:50"
        
      }
    ]
  }
];


// ************** Generate the tree diagram  *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
  width = 960 - margin.right - margin.left,
  height = 200 - margin.top - margin.bottom;
  
var i = 0,
  duration = 750,
  root;

var tree = d3.layout.tree()
  .size([height, width]);

var diagonal = d3.svg.diagonal()
  .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#cool").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);

d3.select(self.frameElement).style("height", "500px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
    .on("click", click);

  nodeEnter.append("circle")
    .attr("r", 1e-6)
    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
    .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
    .attr("dy", ".35em")
    .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
    .text(function(d) { return d.name; })
    .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
    .attr("r", 10)
    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
    .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
    .remove();

  nodeExit.select("circle")
    .attr("r", 1e-6);

  nodeExit.select("text")
    .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
    .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
    });

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
  d.x0 = d.x;
  d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
  d._children = d.children;
  d.children = null;
  } else {
  d.children = d._children;
  d._children = null;
  }
  update(d);
}/* flow-chart end*/


/*Bot pie Chart*/
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
