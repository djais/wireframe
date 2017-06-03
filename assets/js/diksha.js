

/* Products And Offer Controller */
/* -- productsCtrl : --*/

app.controller("productsCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $rootScope.tabidarr = []
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
  $scope.addorremovetab=function(addorremove,itemorindex){
    console.log(addorremove,itemorindex);
    switch(addorremove){
      case "add":
      var newtab = {
        id: itemorindex.id,
        title:itemorindex.name,
        mainobj:itemorindex,
        url:'assets/views/editProduct.html',
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
});

/*-- productListCtrl ---*/

app.controller("productListCtrl", function($scope, $rootScope,$location,$http){

    $scope.init = function(){
    };


  $scope.save = function () {
    console.log($rootScope.selected);
//$location.path("products");
//$rootScope.addProduct = $rootScope.selected.id;

for(var index = 0; index < $rootScope.products.length; index++){
  if($rootScope.products[index].id == $rootScope.selected.id){
    $rootScope.products[index] = $rootScope.selected;
    $rootScope.onClickTab($scope.tabs[0]);

  }
}
//$location.path('products');
//$rootScope.onClickTab($scope.tabs[0]);

};
$scope.cancelProduct = function () {
  $rootScope.onClickTab($scope.tabs[0]);
};
$scope.delete = function (id) {
  $rootScope.products.splice(id,1);

};

$scope.label=[{ "Label": "", "Description": ""}];
$scope.addOther = function () {
// console.log(parentindex);
$scope.selected.otherspecs.push({ "Label": "", "Description": "" })
// $scope.label=$rootScope.locations[parentindex].other;
}
$scope.deleterefer = function(refer){
  var index = $scope.selected.otherspecs.indexOf(refer);
  $scope.selected.otherspecs.splice(index, 1);
};


})
/*-- addProductCtrl--*/
app.controller("addProductCtrl", function($scope, $rootScope,$location,$http,$window){
  $scope.submit = function () {
    console.log("data", $rootScope.products)
    //console.log(i);
    $rootScope.addproduct = {
      name: $scope.name,
      shortdesc: $scope.sdesc,
      longdesc: $scope.ldesc,
      tags: $scope.tags,
      img: $scope.imageSrc,
      price: $scope.price,
      updateTs:$scope.uploadTs = Math.floor(Date.now() / 1000),
      avail:$scope.avail


    }
    console.log("data",$rootScope.addproduct);
  $rootScope.products.push($rootScope.addproduct);
 //$location.path('products');
$rootScope.onClickTab($scope.tabs[0]);

};
  $scope.leadme = function () {
    console.log("lead me icon clicked")
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  };
  $scope.tags = [
  ];
  $scope.label=[{ "Label": "", "Description": ""}];
  $scope.addOther = function () {
  // console.log(parentindex);
  $scope.label.push({ "Label": "", "Description": "" })
  // $scope.label=$rootScope.locations[parentindex].other;
  }
  $scope.deleterefer = function(refer){
    var index = $scope.label.indexOf(refer);
    $scope.label.splice(index, 1);
  };
})

/* -- offersCtrl : --*/

app.controller("offersCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $rootScope.tabidarr = [];
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

  $scope.addorremovetab=function(addorremove,itemorindex){
    console.log(addorremove,itemorindex);
    switch(addorremove){
      case "add":
      var newtab = {
        id: itemorindex.id,
        title:itemorindex.name,
        mainobj:itemorindex,
        url:'assets/views/editOffer.html',
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

});
/*-- offersCtrl : --*/
app.controller("offerListCtrl", function($scope, $rootScope,$location,$http){
    $scope.init = function(){
      // initilization variables
//console.log("haiiiiiiiiiii");
console.log($rootScope.offers);
    };

  $scope.delete = function (id) {
    $rootScope.offers.splice(id,1);

  }
  $scope.save = function () {
//$location.path("products");
//$rootScope.addOffer = $rootScope.selected.id;
for(var index = 0; index < $rootScope.offers.length; index++){
  if($rootScope.offers[index].id == $rootScope.selected.id){
    $rootScope.offers[index] = $rootScope.selected;
  }
  $rootScope.onClickTab($scope.tabs[0]);

}
//$location.path('products');

};
$scope.cancel = function () {
  $rootScope.onClickTab($scope.tabs[0]);
}
$scope.delete = function (id) {
  $rootScope.products.splice(id,1);

}

$scope.label=[{ "Label": "", "Description": ""}];
$scope.addOther = function () {
// console.log(parentindex);
$scope.selected.otherspecs.push({ "Label": "", "Description": "" })
// $scope.label=$rootScope.locations[parentindex].other;
}
$scope.deleterefer = function(refer){
  var index = $scope.selected.otherspecs.indexOf(refer);
  $scope.selected.otherspecs.splice(index, 1);
};


})

/*-addofferCtrl-*/
app.controller("addofferCtrl", function($scope, $rootScope,$http,$location) {
  $scope.init = function () {

};
  $scope.submit = function () {
    console.log("hello world")
    $rootScope.addoffer = {
      name:$scope.name,
      shortdesc:$scope.sdesc,
      longdesc:$scope.ldesc,
      tags:$scope.tags,
      img:$scope.imageSrc,
      bprice:$scope.bprice,
      offprice:$scope.offprice,
      //validity:$scope.validity,
      otherspecs:$scope.label,
      otherspecs:$scope.desc,
      updateTs:$scope.uploadTs = Math.floor(Date.now() / 1000),
      avail:$scope.avail

    }
  $rootScope.offers.push($rootScope.addoffer);
//  $location.path('offers');
  $rootScope.onClickTab($scope.tabs[0]);

};
$scope.leadme = function () {
  console.log("lead me icon clicked")
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
};
$scope.tags = [
];
$scope.label=[{ "Label": "", "Description": ""}];
$scope.addOther = function () {
// console.log(parentindex);
$scope.label.push({ "Label": "", "Description": "" })
// $scope.label=$rootScope.locations[parentindex].other;
}
$scope.deleterefer = function(refer){
  var index = $scope.label.indexOf(refer);
  $scope.label.splice(index, 1);
};


})
