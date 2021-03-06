import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('navigation');
    this.route('hero');
    this.route('service');
    this.route('work');
    this.route('team');
    this.route('contacts');
  });
  this.route('main', { path: '/' });
  this.route('login');
});

export default Router;
