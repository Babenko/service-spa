import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn() {
      console.log(this.get('session'))
      const LOGIN = this.get("login");
      const PASSWORD = this.get("password");
      this.get('session')
        .open('firebase', { provider: 'password', email: LOGIN, password: PASSWORD})
        .then((e) => this.transitionToRoute("/admin"));
    }
  }
});
