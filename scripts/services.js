 angular.module('amagiApp').factory('videoRepo',['$http',function($http){
    //declare the local Variables
    var baseUrl ="https://amagi.herokuapp.com/"
    var spotApi_path = "ui-test/api/v1/spots"
    var spotApi = baseUrl + spotApi_path;
    //console.log(spotApi);

    // return the factory methods which can be accesed by videoRepo Object
    return {
        getAllVideos: function(){
           return $http.get(spotApi);
        }
    }

 }]);