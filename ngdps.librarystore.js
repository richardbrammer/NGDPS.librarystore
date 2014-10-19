/* global angular */
angular.module('ngdps-librarystore', []);

angular.module('ngdps-librarystore').factory('adobeDPS', ['$window', function ($window) {
  'use strict';

  if (typeof $window.adobeDPS !== 'undefined') {
    return $window.adobeDPS;
  } else {
    throw new Error('AdobeLibraryAPI.js must be installed. Download from here: www.adobe.com/go/dps-library-store-api');
  }
}]);