var jsResdources = 
[
    "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular-route.js",
    "app/app.js"
];
function LinkCheck(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function addModule(path, name) {
    var extensions = ['.module','.controller', '.service', '.spec'];
    for(var i=0; i<extensions.length; i++) {
        var url = path+'/'+name+extensions[i]+'.js';
        if(LinkCheck(url)) {
            console.log("adding "+ url);
            jsResdources.push(url);
        }
    }
}

addModule('app/list', 'list');
addModule('app/about', 'about');

