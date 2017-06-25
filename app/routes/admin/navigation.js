import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var model = this.controllerFor("admin").get("model");
    console.log(model);
    return model;
  }

});
