const folders =
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
  };

function recurse( data) {
  var htmlRetStr = "<ul class='folder-container'>";
  for (var key in data) {
    if (typeof(data[key])== 'object' && data[key] != null) {
      htmlRetStr += recurse( data[key] );
      htmlRetStr += '</ul></li>';
    } else if(data[key]=='dir'){
      htmlRetStr += "<li class='folder-item'>" + data["name"]+"</li><li class='folder-wrapper'>";
    }
    else if( key=='name' && data['type']!='dir' ){
      htmlRetStr += "<li class='file-item'>" + data['name']+"</li>";
    }
  }
  return( htmlRetStr );
}
function fn(data,string) {
  arr = [];
  for (var key in data)
    if (typeof(data[key]) == 'object' && data[key] != null) {
      console.log('1if.obj ' + data['children']);
      if (data['name'].indexOf(string) <= -1) {
        console.log('2if.obj.!str ' + data['name']);
        for (var i = 0; i < data.children.length; i++) {
          console.log('3for.child[' + i + '] ' + data.children[i]);
          arr=arr.concat(fn(data.children[i], string));
        }
        return arr;
      }
    }
    else {
      if (data[key] == 'dir') {
        console.log('4if.dir ' + data['name']);
        if (data['name'].indexOf(string) > -1) {
          console.log('5if.dir.str ' + data['name']);
          arr = arr.concat(data);
          return arr;
        }
      }
      else if (key == 'name' && data['name'].indexOf(string) > -1) {
        console.log('5if.file ' + data['name']);
        arr = arr.concat(data);
        return arr;
      }
    }


}
function solve() {
  document.getElementById("container").innerHTML= recurse(fn(folders,document.getElementById('filterInput').value));
}




// document.getElementById("input").onchange=function() {resolve()};
// function resolve(){
//
//   var string= document.getElementById("input");
//   document.getElementById("container").innerHTML=recurse(folders,string.value);
//
//
// }

