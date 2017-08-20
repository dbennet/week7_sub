(function() {
 	angular
 		.module("spa-demo.layout")
 		.component("sdItPage", {
 			templateUrl: itpagetemplateUrl,
 			controller: ITPageController,
 			transclude: true,
 		})
 		.component("sdItArea", {
 			templateUrl: itareatemplateUrl,
 			controller: ITAreaController,
 			transclude: true,
 			require: {
 				areasController: "^^sdItPage"
 			}
 		})
 		.directive("sdItPageSide", [function(){
       return {
         controller: AreasSideController,
         controllerAs: "sideVM",
         bindToController: true,
         restrict: "A",
         scope: false,
         require: {
           areas: "^sdItPage"
         }
       }
     }]);
 
 	itareatemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
 	function itareatemplateUrl(APP_CONFIG) {
 		return APP_CONFIG.it_area_html;
 	}
 	itpagetemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
 	function itpagetemplateUrl(APP_CONFIG) {
 		return APP_CONFIG.it_page_html;
 	}
 
 	ITPageController.$inject = ["$scope"];
 	function ITPageController($scope) {
 		var vm = this;
 		vm.hidden = true;
 		vm.$onInit = function() {
 			console.log("ITPageController",$scope);
 		}
 		return;
 		////////////////////////
 	}
 
 	ITAreaController.$inject = ["$scope"];
 	function ITAreaController($scope) {
 		var vm = this;
 		vm.show = true;
 		vm.showThings = showThings;
 		vm.$onInit = function() {
 			console.log("ITAreaController",$scope);
 		}
 		return;
 		//////////////////////////
 		function showThings(check) {
 			vm.show = check;
 			vm.PageController.hidden = check ? false : true;
 		}
 	}
 	AreasSideController.$inject = [];
   function AreasSideController() { 
     var vm = this;
     vm.isHidden = isHidden;
 
     return;
     /////////////////
     function isHidden() {
       var result=vm.areas.hidden;  
       return result;
     }
   }
 
 
 })(); 