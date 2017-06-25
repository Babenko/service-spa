import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    signOut() {
      console.log(this.get('session'));
      this.get('session').close();
    },

    saveModel() {
      this.get('model').save();
    }
  }
});
