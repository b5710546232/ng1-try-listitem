var homePageComponent = {
	templateUrl: './app/pages/home/home.html',
	controller: homePageController
};

function homePageController(getItemService) {
	var self = this;
	self.getItemService = getItemService;
	var MAX_RECORD = 200;

	self.onSearchChange = function(newVal, oldVal) {
		var searchText = newVal;
		self.searchList = self.itemList
			.filter(function(item) {
				return item.name.includes(searchText);
			})
			.slice(0, MAX_RECORD);
	};

	self.$onInit = function() {
		self.name = 'home-page';
		self.getItemService.getItem().then(function(res) {
			self.itemList = res;
			self.searchList = self.itemList.slice(0, MAX_RECORD);
		});
	};
}
angular.module('app').component('homePage', homePageComponent);
