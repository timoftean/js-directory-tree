const folders =  [
    {
        type: 'dir',
        name: 'app',
        children: [
            {
                type: 'file',
                name: 'index.html'
            },
            {
                type: 'dir',
                name: 'js',
                children: [
                    {
                        type: 'file',
                        name: 'main.js'
                    },
                    {
                        type: 'file',
                        name: 'app.js'
                    },
                    {
                        type: 'file',
                        name: 'misc.js'
                    },
                    {
                        type: 'dir',
                        name: 'vendor',
                        children: [
                            {
                                type: 'file',
                                name: 'jquery.js'
                            },
                            {
                                type: 'file',
                                name: 'underscore.js'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'dir',
                name: 'css',
                children: [
                    {
                        type: 'file',
                        name: 'reset.css'
                    },
                    {
                        type: 'file',
                        name: 'main.css'
                    }
                ]
            }
        ]
    }
];

function strInStr(a,b){
    return a.indexOf(b) > -1 ;
}

function recurse( data ,string) {
    var htmlRetStr = "<ul class='folder-container'>";
    for (var key in data) {
        if (typeof(data[key])== 'object' && data[key] != null) {
            htmlRetStr += recurse( data[key] );
            htmlRetStr += '</ul></li>';
        } else if(strInStr(data['name'],string) && data[key]=='dir'){
            htmlRetStr += "<li class='folder-item'>" + data["name"]+"</li>";
        }
        else if( strInStr(data['name'],string) && key=='name' && data['type']!='dir' ){
            htmlRetStr += "<li class='file-item'>" + data['name']+"</li><li class='folder-wrapper'>";
        }
    }
    return( htmlRetStr );
}
document.getElementById("container").innerHTML= recurse(folders,"");
function solve() {
    // if(document.getElementById('filterInput').value === "")
    //     document.getElementById("container").innerHTML= recurse(folders,"");
    // else
    //     document.getElementById("container").innerHTML= recurse(folders,document.getElementById('filterInput').value);

}


