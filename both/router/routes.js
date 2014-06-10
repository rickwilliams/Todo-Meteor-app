/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

var renderLoadingHook = function (pause) {
	 if(!this.ready()) {
	  	this.render('Loading');
	  	pause();
  	} 
  };

Router.onRun(function () {})
Router.onData(function() {});
Router.onBeforeAction('loading', {only: ['todos.detail']})
Router.onAfterAction(function() {});
Router.onStop(function() {});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('todos.index', {path: '/'});
  this.route('todos.detail', {path: '/todos/:_id'});
});
