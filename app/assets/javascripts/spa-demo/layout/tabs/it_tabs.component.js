(function() {
   "use strict";
 
   angular
     .module("spa-demo.layout")
     .component("sdItTabs", {
       templateUrl: tabsItTemplateUrl,
       controller: ItTabsController,
       transclude: true,
     })
     .component("sdItTab", {
       templateUrl: tabItTemplateUrl,
       controller: ItTabController,
       transclude: true,
       bindings: {
         label: "@"
       },
       require: {
         tabsController: "^^sdItTabs"
       }
     })
     ;
 
   tabsItTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
   function tabsItTemplateUrl(APP_CONFIG) {
     return APP_CONFIG.it_tabs_html;
   }    
   tabItTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
   function tabItTemplateUrl(APP_CONFIG) {
     return APP_CONFIG.it_tab_html;
   }    
 
   ItTabsController.$inject = ["$scope"];
   function ItTabsController($scope) {
     var vm=this;
     vm.tabs=[];
     vm.selectTab = selectTab;
     vm.refreshThings = refreshThings;
 
     vm.$onInit = function() {
       console.log("TabsController",$scope);
     }

     console.log("tabs initialized");
     return;
     //////////////
     function selectTab(tab) {
       angular.forEach(vm.tabs, function(tab){
         tab.selected=false;
       });
       tab.selected=true;
     }
     function refreshThings() {
       vm.tabs = [];
     }
   }
 
   ItTabsController.prototype.addTab = function(tab) {
     if (this.tabs.length===0) {
       tab.selected = true;
     }
     this.tabs.push(tab);
   }
 
 
   ItTabController.$inject = ["$scope"];
   function ItTabController($scope) {
     var vm=this;
 
     vm.$onInit = function() {
       console.log("TAB Init",$scope);
       vm.tabsController.addTab(vm);
     }
     return;
     //////////////
   }
 })();