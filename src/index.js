/* const dirTree = require("directory-tree");
//https://www.npmjs.com/package/directory-tree */

/* //====
photos
├── summer
│   └── june
│       └── windsurf.jpg
└── winter
    └── january
        ├── ski.png
        └── snowboard.jpg
        //========== */

let jsondata = {
  path: "photos",
  name: "photos",
  size: 600,
  type: "directory",
  children: [
    {
      path: "photos/summer",
      name: "summer",
      size: 400,
      type: "directory",
      children: [
        {
          path: "photos/summer/june",
          name: "june",
          size: 400,
          type: "directory",
          children: [
            {
              path: "photos/summer/june/windsurf.jpg",
              name: "windsurf.jpg",
              size: 400,
              type: "file",
              extension: ".jpg"
            }
          ]
        }
      ]
    },
    {
      path: "photos/winter",
      name: "winter",
      size: 200,
      type: "directory",
      children: [
        {
          path: "photos/winter/january",
          name: "january",
          size: 200,
          type: "directory",
          children: [
            {
              path: "photos/winter/january/ski.png",
              name: "ski.png",
              size: 100,
              type: "file",
              extension: ".png"
            },
            {
              path: "photos/winter/january/snowboard.jpg",
              name: "snowboard.jpg",
              size: 100,
              type: "file",
              extension: ".jpg"
            }
          ]
        }
      ]
    }
  ]
};

/* ================================================= */
