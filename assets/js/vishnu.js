/* -- webbotsCtrl : --*/
app.controller("webbotsCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $rootScope.tabidarr = [];
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
});/* -- webbotsCtrl : --*/

/* -- fbbotsCtrl : --*/
app.controller("fbbotsCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $rootScope.tabidarr = [];
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
});/* -- fbbotsCtrl : --*/

/* -- multimediaCtrl : --*/
app.controller("multimediaCtrl", function ($scope, $rootScope, $http) {
  $scope.init = function () {
    $rootScope.tabidarr = [];
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
    $scope.multimedia = {};
  };/* init() */

  $scope.addorremovetab=function(addorremove,itemorindex){
    console.log(addorremove,itemorindex);
    switch(addorremove){
      case "add":
        var newtab = {
          id: itemorindex.id,
          title:itemorindex.name,
          mainobj:itemorindex,
          url:'assets/views/editMultimedia.html',
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
  }/* -- addorremovetab :--*/

  $scope.removeitem=function(index){
    $rootScope.multimedias.splice(index,1);
  }

  $scope.saveadd=function(){
    $scope.multimedia.uploadTs = Math.floor(Date.now() / 1000);
    $rootScope.multimedias.push($scope.multimedia);
    console.log($rootScope.multimedias);
    $rootScope.onClickTab($scope.tabs[0]);
  }

  $scope.saveedit=function(){
    $rootScope.onClickTab($scope.tabs[0]);
  }
});/* -- multimediaCtrl : --*/



/* -- multimediaListCtrl : --*/
app.controller("multimediaListCtrl", function ($scope, $rootScope, $http) {
  $scope.letterLimit = 100;
  $scope.multimedia = true;
});/* -- multimediaListCtrl : --*/