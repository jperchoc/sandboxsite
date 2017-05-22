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

addModule('app/views/public/list', 'list');
addModule('app/views/public/about', 'about');
addModule('app/views/public/contact', 'contact');
addModule('app/views/public/login', 'login');
addModule('app/views/private/privateHome', 'privateHome');
addModule('app/services', 'services');
addModule('app/services/navigation', 'navigation');
addModule('app/services/authentification', 'authentification');
addModule('app/services/API', 'API');

