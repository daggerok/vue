'use static';

(function () {

  new Vue({
    el: '#v-on',
    methods: {
      handler: function(event) {
        // event.preventDefault();
        console.log('hi', event);
      },
    },
  });

  new Vue({
    el: '#v-show-v-if',
    data: {
      message: '',
    },
    methods: {
      handler: function(event) {
        event.preventDefault();
        console.log('clicked', JSON.stringify(this.$data));
        this.$data.message = '';
      },
    },
  });

  new Vue({
    el: '#two-way-binding',
    data: {
      message: 'hi!',
    },
  });

})();
