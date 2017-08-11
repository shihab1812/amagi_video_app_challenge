 //Defining Providers
 angular.module('amagiApp').value('company',{'name':'Amagi','subTitle':'not Defined'});

//header rejection resolver
  angular.module('amagiApp').config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);