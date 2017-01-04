'use static';

(function () {

  const app = new Vue({
    el: '#app',
    data: {
      message: 'hi!',
    },
  });

  console.log(app);

  return app;

})();
