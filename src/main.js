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

function displayJsonTree( data) {
  var htmlRetStr = "<ul class='folder-container'>";
  for (var key in data) {
    if (typeof(data[key])== 'object' && data[key] != null) {
      htmlRetStr += displayJsonTree( data[key] );
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
function filterJson(data,string) {
  arr = [];
  for (var key in data)
    if (typeof(data[key]) == 'object' && data[key] != null) {
      if (data['name'].indexOf(string) <= -1) {
        for (var i = 0; i < data.children.length; i++) {
          arr=arr.concat(filterJson(data.children[i], string));
        }
        return arr;
      }
    }
    else {
        if (data['name'].indexOf(string) > -1) {
          arr = arr.concat(data);
          return arr;
        }
    }
}
document.getElementById("folders").innerHTML= displayJsonTree(folders);
function solve() {
  var toSearch=document.getElementById('filterInput').value;
  if(toSearch.length==0){
    document.getElementById("folders").innerHTML= displayJsonTree(folders);
  }
  else {
    var str = "Searching for: " + document.getElementById('filterInput').value ;
    document.getElementById("searchingFor").innerHTML = str;
    document.getElementById("folders").innerHTML = displayJsonTree(filterJson(folders, document.getElementById('filterInput').value));
  }
}
