angular.module('AppExample')

  .controller('PhonebookCtrl', function () {

    // PhonebookCtrl

  })

  .directive('appPbSearch', function (pb) {

    return {
      scope: {},
      replace: true,
      controller: 'PhonebookCtrl as search',
      templateUrl: 'templates/pb.search.tmpl.html',
      link: function (scope, el, attrs, fn) {
        scope.search = {};
        scope.search.data = {};

        scope.search.findNumber = function () {
          var n = name || scope.search.name;
          scope.search.lastSearchedName = angular.copy(scope.search.name);
          scope.search.data.results = pb.findNumberByName(n);
        };
      }
    }

  })

  .directive('appPbListings', function (pb) {

    return {
      bindToController: {
        displayResults: '='
      },
      replace: true,
      controller: 'PhonebookCtrl as listings',
      templateUrl: 'templates/pb.listings.tmpl.html',
      link: function (scope, el, attrs, fn) {
        scope.listings.displayResults = scope.displayResults || pb.listings;
      }
    }

  });
