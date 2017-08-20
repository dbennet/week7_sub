(function() {
   "use strict";
 
   angular
     .module("spa-demo.subjects")
     .component("sdItImages", {
       templateUrl: itImagesTemplateUrl,
       controller: sdItImagesController,
     });
 
   itImagesTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
   function itImagesTemplateUrl(APP_CONFIG) {
     return APP_CONFIG.it_images_html;
   }   
   sdItImagesController.$inject = ["$scope","spa-demo.subjects.ITImages"]
   function sdItImagesController($scope,imageThings) {
     var vm = this;
     console.log("helollogsgsgsagsagfdsfgdsfgsdfg");
     vm.$postLink = function() {
       $scope.$watch(
         function() { return imageThings.getImages(); }, 
         function(images) { 
           vm.images = images; 
            console.log(vm.images);
           console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
         }
       );
     }
     vm.updateImageId = updateImageId;
     return;
     //////////////////////////
     function updateImageId(index) {
       // console.log("index", index);
       imageThings.updateImageId(index);
     }
   }
 })();