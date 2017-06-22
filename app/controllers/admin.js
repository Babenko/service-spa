import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    signOut() {
      console.log(this.get('session'));
      this.get('session').close();
    },

    saveTitle(newTitle) {
      this.get('model').set("title", newTitle);
      this.get('model').save();
      console.log("save");
    }
  }
});
