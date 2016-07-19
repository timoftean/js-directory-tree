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

function recurse( data) {
  var htmlRetStr = "<ul class='folder-container'>";
  for (var key in data) {
    if (typeof(data[key])== 'object' && data[key] != null) {
      htmlRetStr += recurse( data[key] );
      htmlRetStr += '</ul></li>';
    } else if(data[key]=='dir'){
      htmlRetStr += "<li class='folder-item'>" + data["name"]+"</li>";
      //htmlRetStr += ("<li>"  + key+" "+data[key] + '</li  >' );
    }
    else if( key=='name' && data['type']!='dir' ){
      htmlRetStr += "<li class='file-item'>" + data['name']+"</li><li class='folder-wrapper'>";
      //htmlRetStr += ("<li>"  + key+" "+data['name'] + '</li  >' );
    }
  };

  return( htmlRetStr );
}
document.getElementById("container").innerHTML=recurse(folders);

// function solve() {
//   document.getElementById("container").innerHTML= recurse(folders);
// }
// document.getElementById("input").onchange=function() {resolve()};
// function resolve(){
//
//   var string= document.getElementById("input");
//   document.getElementById("container").innerHTML=recurse(folders,string.value);
//
//
// }

