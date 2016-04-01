Package.describe({
  name:"qinghai:simple-schema",  
  version:"0.2.45_2",
  git:"https://github.com/noteon/meteor-simple-schema",
  summary: "Migrate from meteor 0.8. A simple schema."
});

Npm.depends({
  "string": "1.6.0"
});

Package.on_use(function(api) {
  api.use(['deps@1.0.5', 'underscore@1.0.1', 'check@1.0.2'], ['client', 'server']);
  api.add_files('string.js', 'client');
  api.add_files(['mongo-object.js', 'simple-schema.js', 'simple-schema-context.js'], ['client', 'server']);

  if (typeof api.export !== "undefined") {
    //backwards compatibility with pre-0.6.5 meteor
    api.export(['SimpleSchema', 'SchemaRegEx', 'MongoObject'], ['client', 'server']);
  }
});

Package.on_test(function(api) {
  api.use('qinghai:simple-schema', ['client', 'server']);
  api.use('test-helpers', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  api.add_files(["simple-schema-tests.js", "mongo-object-tests.js"], ['client', 'server']);
});