angular.module('timeApp').directive('showTime',function($interval){

  return {
    restrict: 'E',
    template: '<div>{{name}}, the current time is: {{time}}</div>',
    link: function(scope, element, attrs) {
      $interval(function(){
        scope.time = (new Date()).toString();},1000);
      // var currentTime = new Date();
      // scope.time = currentTime.toString();
    }
  }
});
