angular.module('AppExample')
  .factory('pb', function () {

    var factory = {

      findNumberByName: function (name) {
        return factory.listings.filter( function (listing) {
          var re = new RegExp(name, 'gi');
          return re.test(listing.name);
        });
      },

      listings: [
        {
          id: 1,
          name: 'Tim Lee',
          number: '123-123-2121'
        },
        {
          id: 2,
          name: 'Sara Burns',
          number: '388-232-2221'
        },
        {
          id: 3,
          name: 'Lee Kelly',
          number: '555-321-8839'
        }
      ]

    };

    return factory;

  });
