import(/* webpackChunkName: "bar" */ './util.js').then(({ add }) => {
  console.log(add(2, 3));
  document.body.innerHTML = 'util.js loaded';
});
