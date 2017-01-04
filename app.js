'use static';

(function () {

  const app = new Vue({
    el: '#app',
    data: {
      message: 'hi!',
      longMessage: '',
    },
  });

  console.log(app);

  return app;

})();
