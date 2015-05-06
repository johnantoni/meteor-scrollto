Package.describe({
  name: 'johnantoni:meteor-scrollto',
  summary: 'jquery.scrollTo package based on natestrausers original build, packaged with the latest 2.0 release',
  version: '0.0.1',
  git: 'https://github.com/johnantoni/meteor-scrollto',
  documentation: 'README.md'
});

Package.on_use(function(api) {
  api.add_files([
    'jquery.scrollTo/jquery.scrollTo.js'
  ], ['client']);
});
