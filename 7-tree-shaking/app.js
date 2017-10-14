import('./module.js').then(module => {
    module.log();
}).catch(error => 'An error occurred while loading the module');

document.write('app.js loaded.');
