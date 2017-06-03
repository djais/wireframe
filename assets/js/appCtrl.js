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
  // $routeProvider.when("/locations",          {templateUrl: 'assets/views/locationList.html', reloadOnSearch: false});
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
    console.log("tagerror defined as blank")
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
    name: "Bot Response",
    y: 15
  }, {
    name: "Initiated",
    y: 3000,
    sliced: false,
    selected: true
  }, {
    name: "Agent Respond",
    y: 1000
  }, {
    name: "Not Responded",
    y: 5000
  }]
  $scope.chartConfig = {
    xAxis: {
      categories: ['Buy', 'Book Table', 'Location', 'Contact', 'Product Enquiry','Unknown']
    },
    title: {
      text: 'Intent'
    },
    yAxis: { title: { text: '' } },
    tooltip: { valueSuffix: ' ' },
    legend: { align: 'center', verticalAlign: 'bottom', borderWidth: 0 },
    plotOptions: {
      area: {
        animation: false,

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
        threshold: null,

                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null

                }
            },
            responsive: {
                                          rules: [{
                                            condition: {
                                              maxWidth: 1000
                                            },
                                            chartOptions: {
                                              legend: {
                                                enabled: true
                                              }
                                            }
                                          }]
                                        },
            credits: {
                         enabled: false
                    },
            series: [{
              type:'bar',
              spacingBottom: 15,
                            spacingTop: 0,
                            spacingLeft: 10,
                            spacingRight: 100,
                data: [12,36,75,50, 45,30]
            }]
    };




  /*Flow-chart start*/
  var treeData =
    {
      "name": "HI:900",
      "children": [
        {
          "name": "Intent1: 200",
          "children": [
            { "name": "Intent3: 100" },
            {
              "name": "intent6: 70",
              "children": [
                { "name": "Intent4: 20" },
                { "name": "intent5: 40" },
                { "name": "Dropoff: 10" }
              ]

            },

            { "name": "Dropoff: 30" }
          ]
        },
        {
          "name": "Intent 2: 400",
          "children": [
            { "name": "Intent4: 200" },
            { "name": "intent5: 150" },
            { "name": "Dropoff: 50" }
          ]
        },
        { "name": "Intent 7: 150" },
        { "name": "Dropoff: 50" }
      ]
    };


  // Set the dimensions and margins of the diagram
  var margin = { top: 20, right: 90, bottom: 30, left: 90 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#cool").append("svg")

    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate("
    + margin.left + "," + margin.top + ")");

  var i = 0,
    duration = 750,
    root;

  // declares a tree layout and assigns the size
  var treemap = d3.tree().size([height, width]);

  // Assigns parent, children, height, depth
  root = d3.hierarchy(treeData, function (d) { return d.children; });
  root.x0 = height / 2;
  root.y0 = 0;

  // Collapse after the second level
  root.children.forEach(collapse);

  update(root);

  // Collapse the node and all it's children
  function collapse(d) {
    if (d.children) {
      d._children = d.children
      d._children.forEach(collapse)
      d.children = null
    }
  }

  function update(source) {

    // Assigns the x and y position for the nodes
    var treeData = treemap(root);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) { d.y = d.depth * 180 });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll('g.node')
      .data(nodes, function (d) { return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function (d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    // Add labels for the nodes
    nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function (d) {
        return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function (d) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function (d) { return d.data.name; });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
      })
      .attr('cursor', 'pointer');


    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll('path.link')
      .data(links, function (d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function (d) {
        var o = { x: source.x0, y: source.y0 }
        return diagonal(o, o)
      });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
      .duration(duration)
      .attr('d', function (d) { return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function (d) {
        var o = { x: source.x, y: source.y }
        return diagonal(o, o)
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {

      path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

      return path
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
    }
  }


  // ************** Generate the tree diagram  *****************



  /*Bot pie Chart*/
});