angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
  $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.players = [
    { text: '00'},
    { text: '0'},
    { text: '1'},
    { text: '2'},
    { text: '3'},
    { text: '4'},
    { text: '5'},
    { text: '6'},
    { text: '7'},
    { text: '8'},
    { text: '9'},
    { text: '10'},
    { text: '11'}
  ];
  
  $scope.kpis = [
    { text: 'Complete Pass'},
    { text: 'Incomplete Pass'},
    { text: 'Shot on Target'},
    { text: 'Shot off Target'},  
    { text: 'Touch'},
    { text: 'A'},
    { text: 'B'},
    { text: 'C'},
    { text: 'D'},
    { text: 'E'}
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.sendData = function(player) {
    console.log("selcted", player.text);
  }
})

.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
})

.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
});
