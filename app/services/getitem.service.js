angular.module('app').service('getItemService', [
	'$http',
	function($http) {
		var self = this;

		self.getItem = function() {
			return $http
				.get('http://localhost:8081/comments')
				.then(function(response) {
					return response.data;
				})
				.catch(function(err) {
					console.error(err);
					throw err;
				});
		};
	}
]);
