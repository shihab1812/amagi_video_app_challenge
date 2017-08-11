

(function(){
    //main controller
     angular.module('amagiApp').controller('mainCtrl',['$scope','company',function($scope,company){
        $scope.mainVar = "Hi I Am main Controller";
        $scope.companyName = company.name;
     }]);

     //video append controller
     angular.module('amagiApp').controller('videoAppenderCtrl',['$scope','videoRepo',function($scope, videoRepo){
          $scope.loading = true;
        $scope.videoAppenderText = "Here videos will be appended";
        videoRepo.getAllVideos().then(function(response){
                $scope.videoRepo = response.data;
                console.log($scope.videoRepo);
        },
        function(){
            //error handeling
        }).finally(function(){
             $scope.loading = false;
        })
     }])
})();