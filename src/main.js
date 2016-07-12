const folders = directories: [
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
    ]