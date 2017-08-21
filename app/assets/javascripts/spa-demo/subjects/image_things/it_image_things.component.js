(function() {
   "use strict";
 
   angular
     .module("spa-demo.subjects")
     .component("sdItThings", {
       templateUrl: itThingsTemplateUrl,
       controller: sdItThingsController,
       require: {
         iTAreaController: "^^sdItArea",
         tabsController: "^^sdItTabs"
       }
     });

   itThingsTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
   function itThingsTemplateUrl(APP_CONFIG) {
     return APP_CONFIG.it_things_html;
   }   

   sdItThingsController.$inject = ["$scope","$q","spa-demo.subjects.ITImages"]
   function sdItThingsController($scope,$q,imageThings) {
     var vm = this;
     vm.$onInit = function() {
       console.log("ccccccccc sdthingsController",$scope);
     }
     vm.$postLink = function() {
       $scope.$watch(
         function() { return imageThings.getThings(); }, 
         function (things) { 
           vm.things = things;
           vm.tabsController.refreshThings();
           if(typeof vm.things === "undefined" || vm.things.length === 0) {
             vm.iTAreaController.showThings(false);
           } else {
             vm.iTAreaController.showThings(true);
           }
         }
       );
     }  
     return;
     //////////////
     
   }
 })();