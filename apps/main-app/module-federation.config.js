module.exports = {
  name: 'main-app',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
