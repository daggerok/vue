'use static';

(function app() {

  new Vue({
    el: '#todo-list-app',
    data: {
      tasks: [
        { body: 'eat', completed: false, },
        { body: 'sleep', completed: false, },
        { body: 'work', completed: true, },
      ],
    },
    components: {
      'todo-list': {
        template: '#todo-list',
        props: ['tasks'],
        computed: {
          remaining: function remaining() {
            return this.tasks.filter(this.isInProgress).length;
          },
        },
        methods: {
          isDone: function isDone(task) {
            return task.completed;
          },
          isInProgress: function isInProgress(task) {
            return !this.isDone(task);
          },
          del: function del(task) {
            const self = this;
            this.tasks.forEach(function forEach(t, i) {
              if (task.body === t.body) {
                self.tasks.splice(i, 1);
              }
            });
          },
        },
        components: {
          'todo-item': {
            template: '#todo-item',
            props: ['task', 'del'],
          },
        },
      },
    },
  });

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
  //   data: function data() {
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
        data: function data() {
          return { counter: 0, };
        },
        methods: {
          count: function count() {
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
      increment: function increment(event) {
        this.counter++;
      },
    },
  });

  new Vue({
    el: '#v-on',
    methods: {
      handler: function handler(event) {
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
      handler: function handler(event) {
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
