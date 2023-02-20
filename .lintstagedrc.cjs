module.exports = {
  '*.{.ts,.tsx}': ['eslint'],
  '*.{.ts,.tsx,.css,.scss}': ['prettier --write'],
  '*.js': 'eslint --cache --fix',
};
