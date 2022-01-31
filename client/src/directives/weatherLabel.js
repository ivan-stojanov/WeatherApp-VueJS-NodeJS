/* 
Custom directive for styling DOM element. 
(pretty based component, used as domenstration of the usage for the custom directives)
*/
export default {
  beforeMount: function (el) {
    el.style.fontSize = '12px';
    el.style.textDecoration = 'underline';
  },
};
