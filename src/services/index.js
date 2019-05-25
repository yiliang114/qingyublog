const files = require.context('./modules', false, /\.js$/);

let serviceModules = {};
files.keys().forEach((key) => {
  if (key === './index.js') return;
  Object.assign(serviceModules, files(key).default || files(key))
});

export default serviceModules
