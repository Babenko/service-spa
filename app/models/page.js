import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  hero: DS.attr(),
  service: DS.attr(),
  work: DS.attr(),
  team: DS.attr(),
});
