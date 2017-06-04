/*Dashboard and chartflow Controller   start*/

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



 
});

/*Dashboard and Chartflow Controller */

/*chat controller*/
app.controller("chatCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
    $scope.tabs=[
    {
      title: 'Customer Messages',
      url: 'assets/views/chatList.html'
    }
    ];
    $rootScope.currentTab = 'assets/views/chatList.html';
    $scope.error = "";
  };/* init() */

  $scope.addorremovetab=function(addorremove,itemorindex){
    console.log(addorremove,itemorindex);
    switch(addorremove){
      case "add":
      var newtab = {
        id: itemorindex.id,
        title:itemorindex.name,
        mainobj:itemorindex.msg,
        url:'assets/views/chatDetails.html',
        closeable:true
      };
      console.log()

      $rootScope.addorremove($scope,newtab);
      // addorrem($scope,newtab);
      break;
      case "remove":
        console.log($scope.tabs);
        console.log($rootScope.tabidarr);
        $scope.tabs.splice(itemorindex,1);
        $rootScope.tabidarr.splice(itemorindex-1,1);
        console.log($scope.tabs);
        console.log($rootScope.tabidarr);
        $rootScope.onClickTab($scope.tabs[itemorindex-1]);
        if($scope.tabs.length<$rootScope.maxtabs)
          $rootScope.taberror = "";
      break;
    }
  }
});

/* -- chatListCtrl : --*/

app.controller("chatListCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){

  };/* init() */

  $scope.pass = function(scope){
    console.log("scope pass test",scope);
  }

});



/* -- agentCtrl : --*/

app.controller("agentCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
      {
        title: 'Agents',
        url: 'assets/views/agentList.html'
      },
      {
        title: 'Add New',
        url: 'assets/views/addAgent.html'
      }
      // {
      //   title: 'Agent Edit',
      //   url: 'assets/views/agentedit.html'
      // },
      // {
      //   title: 'Agent Detail',
      //   url: 'assets/views/agentDetail.html'
      // }
    ];
    $rootScope.currentTab = 'assets/views/agentList.html';
  };/* init() */

  $scope.addorremovetab=function(addorremove,itemorindex){
    console.log(addorremove,itemorindex);
    switch(addorremove){
      case "add":
      var newtab = {
        id: itemorindex.id,
        title:itemorindex.name,
        mainobj:itemorindex,
        url:'assets/views/agentedit.html',
        closeable:true
      };
      $rootScope.addorremove($scope,newtab);
      // addorrem($scope,newtab);
      break;
      case "remove":
        console.log($scope.tabs);
        console.log($rootScope.tabidarr);
        $scope.tabs.splice(itemorindex,1);
        $rootScope.tabidarr.splice(itemorindex-2,1);
        console.log($scope.tabs);
        console.log($rootScope.tabidarr);
        $rootScope.onClickTab($scope.tabs[itemorindex-1]);
        if($scope.tabs.length<$rootScope.maxtabs)
          $rootScope.taberror = "";
      break;
    }
  }

});

/*--- agentListCtrl --*/
app.controller("agentListCtrl", function($scope,$rootScope, $http,$location){
 
 $scope.init = function(){
    
  };

  
// $scope.agentdet=$rootScope.selected;
console.log($rootScope.selected);

  console.log($rootScope.agents);
  // $scope.go=function(val){
  //   console.log(val);
  //   $rootScope.a=val;
  //   // console.log($scope.agentdetail)
  //   // console.log("thi is agentd edit ctrl")agentdetail
  //   $location.path('agentedit');

  //   //init function
  // }

  $scope.save=function(a){
     console.log("edit agent data", $rootScope.selected);
    $rootScope.addagtID = $rootScope.selected.id;
    console.log("agent add id", $rootScope.addagtID);
    console.log("dummy", $rootScope.agents);
    for (var index = 0; index < $rootScope.agents.length; index++) {
      console.log("agent list", $rootScope.agents[index]);
      if ($rootScope.agents[index].id == $rootScope.addfaqID) {
        console.log($rootScope.agents[index], "+++++", $rootScope.selected)
        $rootScope.agents[index] = $rootScope.agents[index];

      }
    }
    
    $rootScope.onClickTab($scope.tabs[0]);
  
  }
  $scope.Cancel=function(){
    $rootScope.onClickTab($scope.tabs[0]);
  }

  $rootScope.delet=function(i){
    $rootScope.agents.splice(i,1);

 /* init() */
}
});
app.controller("agentDetailCtrl", function($scope,$rootScope, $http){
 
     $scope.init = function(){
    
  };/* init() */
    

});

app.controller("agenteditCtrl", function($scope,$rootScope, $http){
  $scope.init = function(){
   console.log("this id agent details")

   $scope.agentDetail=function(detailval){
    console.log(detailval);
    
   }
    //init function
  };/* init() */

});

app.controller('addAgentCtrl', function ($rootScope, $scope, $location, fileReader) {
  $scope.init = function () {
    console.log("this is add agent")
    $scope.user = {}
    $scope.imageSrc = "";
    $scope.save = function (agentData, src) {
      console.log(agentData);
       console.log(src);
       $rootScope.agents.push(agentData)
        $rootScope.onClickTab($scope.tabs[0]);
    }
        $scope.master = {email: "",phone:"",img:""};
  $scope.user = angular.copy($scope.master);
    $scope.reset=function(){

 
      $scope.user = angular.copy($scope.master);
      $scope.myForm.$setPristine();
  

        // $scope.myForm.$setPristine();

        // angular.forEach($scope.myForm, (value, key) => {
        //   // filter out angular properties
        //   if (key.indexOf('$') === 0) {
        //     return;
        //   }

        //   // This clears the invalid/valid inputs
        //   $scope.model[key] = null;
        // });
    
    }


    $scope.$on("fileProgress", function (e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });
  }
});
