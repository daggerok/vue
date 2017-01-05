'use static';

(function () {

  new Vue({
    el: '#v-for',
    data: {
      users: [
        { username: 'daggerok', fullName: 'Maksim Kostromin', },
        { username: 'bbt', fullName: 'Billy Bob Thornton', },
      ],
    },
    components: {
      'my-user': {
        template: '#my-user',
        props: [ 'user' ],
      },
    },
  });

  // // Global component:
  // Vue.component('my-counter', {
  //   template: '#counter-template',
  //   props: ['title'],
  //   data: function() {
  //     return { counter: 0, };
  //   },
  // });

  new Vue({
    el: '#component',
    components: {
      // local conponent
      myCounter: {
        template: '#counter-template',
        props: ['title'],
        data: function() {
          return { counter: 0, };
        },
        methods: {
          count: function() {
            return this.counter++;
          },
        }
      },
    }
  });

  new Vue({
    el: '#counter-app',
    data: {
      counter: 0,
    },
    methods: {
      increment: function(event) {
        this.counter++;
      },
    },
  });

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
