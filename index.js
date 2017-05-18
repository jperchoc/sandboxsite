(function() {
  'use-strict'
  nunjucks.configure({ autoescape: true });
  nunjucks.render('app/index.html', {jsResdources}
   , function(error, result) {
       document.write(result ? result : error); 
   });
})();
