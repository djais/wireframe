
/* -- faqCtrl :Anjan --*/

app.controller("faqCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $scope.tabs = [
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

  $scope.addorremovetab=function(addorremove,itemorindex){/* for add or remove tabs*/
    console.log(addorremove,itemorindex);
    switch(addorremove){
      case "add":
      var newtab = {
        id: itemorindex.id,
        title:itemorindex.author,
        mainobj:itemorindex,
        url:'assets/views/editFaq.html',
        closeable:true
      };
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
          $scope.error = "";
      break;
    }
  }

});/*end of faq ctrl

/* -- faqListCtrl :Anjan --*/

app.controller("faqListCtrl", function ($scope, $rootScope, $location, $http) {
  $scope.letterLimit = 100;
  $scope.remove = function (id) {/*Function for removing each item in the list */
    console.log("item revoed")
    $rootScope.faqlist.splice(id, 1);

  }/* End of remove function */




});
/* -- editFaqCtrl :Anjan --*/

app.controller("editFaqCtrl", function ($scope, $rootScope, $location, $http) {
// $scope.avail=false;
$scope.deleterefer = function(refer){
  console.log(refer);
  var index = $scope.selected.other.indexOf(refer);
  $scope.selected.other.splice(index, 1);
};

$scope.addOther = function () {
// console.log(parentindex);
$scope.selected.other.push({ "Label": "", "Description": "" })
// $scope.label=$rootScope.locations[parentindex].other;
}
 $scope.cancel=function(){
    $rootScope.onClickTab($scope.tabs[0]);
  }
console.log("edit faq data", $rootScope.selected);
$scope.saveFaq = function () {/*function for saving edited item */
    console.log("edit faq data", $rootScope.selected);
    $rootScope.addfaqID = $rootScope.selected.id;
    console.log("faq add id", $rootScope.addfaqID);
    console.log("dummy", $rootScope.faqlist);
    for (var index = 0; index < $rootScope.faqlist.length; index++) {
      console.log("faq list", $rootScope.faqlist[index]);
      if ($rootScope.faqlist[index].id == $rootScope.addfaqID) {
        console.log($rootScope.faqlist[index], "+++++", $rootScope.selected)
        $rootScope.faqlist[index] = $rootScope.faqlist[index];

      }
    }
    // $location.path('faqs');
    $rootScope.onClickTab($scope.tabs[0]);
    // $scope.addorremovetab('remove',0);
  };/*End of edit saveFaq */

  console.log($rootScope.selected);
  


});/*End of editFaqCtrl */

/* -- Add faq Ctrl :Anjan --*/

app.controller("addFaqCtrl", function ($scope, $rootScope, $window, $location, $http) {
  $scope.showrmv = 0;
  $scope.status=false;
  $scope.submit = function () {
    console.log("data", $scope);
    $rootScope.addFaqData = {
      que: $scope.que,
      ans: $scope.ans,
      tags: $scope.tags,
      attachment: $scope.imageSrc,
      ref: $scope.url,
      status:$scope.status
    }
    console.log("data", $rootScope.addFaqData);
    $rootScope.faqlist.push($rootScope.addFaqData);
    console.log("data aft add", $rootScope.faqlist);
    // $location.path('faqs');
    console.log("current id",$rootScope.currentid)

$rootScope.onClickTab($scope.tabs[0]);
  }

  $scope.leadme = function () {
    console.log("lead me icon clicked")
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
   $scope.leadtag = function () {
    console.log("lead me icon clicked")
    var popup = document.getElementById("taglead");
    popup.classList.toggle("show");
  }
  $scope.tags = [
  ];

});
/* -- locationCtrl : --*/

app.controller("locationCtrl", function ($scope, $rootScope, $location, $http) {
  $scope.init = function () {
    $scope.tabs = [
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
  // $scope.editloc = function (id) {
  //   console.log(id)
  //   $scope.editlocID = id;
  //   $rootScope.getLocById();

  //   $location.path('editlocation');
  // }
  // $rootScope.getLocById = function () {
  //   for (var index = 0; index < $rootScope.locations.length; index++) {
  //     console.log("locations list", $rootScope.locations[index]);
  //     if ($rootScope.locations[index].id == $scope.editlocID) {
  //       $rootScope.loc = $rootScope.locations[index];
  //     }
  //   }
  //   console.log($rootScope.loc);

  // }
 

  
  $scope.addorremovetab=function(addorremove,itemorindex){
    console.log(addorremove,itemorindex);
    switch(addorremove){
      case "add":
      var newtab = {
        id: itemorindex.id,
        title:itemorindex.location,
        mainobj:itemorindex,
        url:'assets/views/editLocation.html',
        closeable:true
      };
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

/*-- locationListCtrl: --*/
app.controller("locationListCtrl", function ($scope, $rootScope) {
  $scope.init = function () {
    // initilization variables
  };
  $scope.removeLoc = function (id) {

    $rootScope.locations.splice(id, 1);

  }

})
/*-- editLocationCtrl: --*/
app.controller("editLocationCtrl", function ($scope, $rootScope, $location) {
  $scope.init = function () {
    // initilization variables
    $scope.label=$rootScope.selected.other;
    $scope.imageSrc = "";
  };
  $scope.cancel=function(){
    $rootScope.onClickTab($scope.tabs[0]);
  }

 $scope.saveEditloc = function () {
    console.log("edit loc ctrl");
    console.log("data for edit loc",$rootScope.selected);
    console.log("data for edit loc id",$rootScope.selected.id);
    console.log("dummy loc data",$rootScope.locations);
      for (var index = 0; index < $rootScope.locations.length; index++) {
      console.log("faq list", $rootScope.locations[index]);
      if ($rootScope.locations[index].id == $rootScope.selected.id) {
        console.log($rootScope.locations[index], "+++++", $rootScope.selected)
        $rootScope.locations[index] = $rootScope.selected;

      }
       $rootScope.onClickTab($scope.tabs[0]);
    }
    $location.path('locations');
  }
  $scope.addOther = function () {
    //  console.log(parentindex);
    $scope.label.push({ "Label": "", "Description": "" })
    // $scope.label=$rootScope.locations[parentindex].other;
  }


})
/*-- addLocationCtrl: --*/
app.controller("addLocationCtrl", function ($scope, $rootScope,  $location) {
   $scope.init = function () {
    // initilization variables
    $scope.label=[{ "Label": "", "Description": ""}];
    $scope.avail=false;
    $scope.imageSrc = "";
  };
  $rootScope.randomString = function (length, chars) {
    var mask = '';
    if (chars.indexOf('0') > -1) mask += '0123456789';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
  }
  $scope.saveloc = function () {
    console.log($scope.imageSrc);
     $scope.rid= $rootScope.randomString(3, '0@');
      console.log("radom id",$scope.rid);
    
    $rootScope.addLocData = {
      id:$scope.rid,
      address: $scope.address,
      city: $scope.city,
      contact: $scope.contact,
      desc: $scope.desc,
      img: $scope.imageSrc,
      label:$scope.label,
      latitude:$scope.latitude,
      longitude:$scope.longtitude,
      location:$scope.name,
      zip:$scope.zip,
      avail:$scope.avail
    }
    console.log("data", $rootScope.addLocData);
    $rootScope.locations.push($rootScope.addLocData);
    console.log("data aft add", $rootScope.locations);
    $rootScope.onClickTab($scope.tabs[0]);
    $location.path('locations');

  
  }

   $scope.addOther = function () {
    //  console.log(parentindex);
    $scope.label.push({ "Label": "", "Description": "" })
    // $scope.label=$rootScope.locations[parentindex].other;
  }
 $scope.deleterefer = function(refer){
  var index = $scope.label.indexOf(refer);
  $scope.label.splice(index, 1);
};



})