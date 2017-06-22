import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn() {
      const self = this;
      const LOGIN = this.get("login");
      const PASSWORD = this.get("password");
      const SESSION = this.get('session')
        .open('firebase', { provider: 'password', email: LOGIN, password: PASSWORD})
        .then((e) => this.transitionToRoute("/admin"));
    }
  }
});
