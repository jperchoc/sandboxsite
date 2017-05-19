(function() {
  'use-strict'
  nunjucks.configure(
    { 
      autoescape: true ,
      tags: {
      blockStart: '<%',
      blockEnd: '%>',
      variableStart: '<$',
      variableEnd: '$>',
      commentStart: '<#',
      commentEnd: '#>'
  }
    });
  nunjucks.render('app/index.html', {jsResdources}, function(error, result) {
       document.write(result ? result : error); 
   });
})();
