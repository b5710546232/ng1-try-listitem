var navbarComponent = {
    templateUrl: "./app/components/navbar/navbar.html",
    controller: navbarController
}

function navbarController() {
    var self = this

}
angular.module('app')
        .component('navbar', navbarComponent)
        