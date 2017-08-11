

(function(){
    //main controller
     angular.module('amagiApp').controller('mainCtrl',['$scope','company',function($scope,company){
        $scope.mainVar = "Hi I Am main Controller";
        $scope.companyName = company.name;
     }]);

     //video append controller
     angular.module('amagiApp').controller('videoAppenderCtrl',['$scope','videoRepo',function($scope, videoRepo){
        
          $scope.loading = true;
         
          $scope.loadMoreBtn = {
              'text': "Load More",
              'status': true
          }
          $scope.loadedVideoArray=[];
          $scope.videoLoading = {
              'startCounter':0,
              'setupLimit': 10,
              'endCounter': function(){
                  return this.setupLimit;
              }
          }

          $scope.end = $scope.videoLoading.endCounter();
          console.log( $scope.end);
           $scope.loadIntoVideoArray = function(){
                   for(let i=$scope.videoLoading.startCounter; i<$scope.end; i++ ){

                    if( i > $scope.videoRepo.length - 1)
                    {
                        $scope.loadMoreBtn.text = "No more data to show";
                        $scope.loadMoreBtn.status=true;
                        break;
                    }
                 else{
                         $scope.loadedVideoArray.push($scope.videoRepo[i]);
                 }
                 
                
            }
           }

          
        $scope.videoAppenderText = "Here videos will be appended";
        videoRepo.getAllVideos().then(function(response){
             
                $scope.videoRepo = response.data;
                console.log($scope.videoRepo);
                $scope.loadIntoVideoArray();
                console.log($scope.loadedVideoArray);
                $scope.loadMoreBtn.status=false;
                   console.log(JSON.stringify(response.data));

        },
        function(){
            //error handeling
        }).finally(function(){
             $scope.loading = false;
        })

        //load more click action
        $scope.loadMoreVid = function(){
             $scope.loadMoreBtn.status=true;
            $scope.videoLoading.startCounter +=  $scope.videoLoading.setupLimit;
            $scope.end += $scope.videoLoading.setupLimit;
            $scope.loadIntoVideoArray();

           
        
          
              console.log($scope.loadedVideoArray);

               $scope.loadMoreBtn.status=false;
      
        }

     }])
})();