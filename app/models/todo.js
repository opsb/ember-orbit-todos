import EO from 'ember-orbit';

export default EO.Model.extend({
  title: EO.attr('string'),
  isDone: EO.attr('boolean')
});