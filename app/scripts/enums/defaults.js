'use strict';

PhonicsApp.config(['$provide', function ($provide) {
  $provide.constant('defaults',

  // BEGIN-DEFAULTS-JSON
  {
    codegen: {
      servers: 'http://generator.wordnik.com/online/api/gen/servers',
      clients: 'http://generator.wordnik.com/online/api/gen/clients',
      server: 'http://generator.wordnik.com/online/api/gen/servers/{language}',
      client: 'http://generator.wordnik.com/online/api/gen/clients/{language}'
    },
    disableCodeGen: true,

    examplesFolder: '/spec-files/',
    exampleFiles: [
        'default.yaml',
        'uber.yaml',
        'minimal.yaml',
        'heroku-pets.yaml',
        'petstore.yaml'],

    backendEndpoint: '/editor/spec',
    useBackendForStorage: false,
    backendHelathCheckTimeout: 5000,
    useYamlBackend: false,

    disableFileMenu: false,
    headerBranding: false,
    brandingCssClass: '',
    schemaUrl: ''
  }
  // END-DEFAULTS-JSON

  );
}]);
