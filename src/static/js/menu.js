const menu = [
    {
      name: "Home",
      path: "/",
      hasSubItem: false
    },
    {
      name: "Explore",
      hasSubItem: true,
      children: [
        {
          name: "Hiking",
          path: "/HikingExploreDetail.html"
        },
        {
          name: "Camping",
          path: "/CampingExploreDetail.html"
        },
        {
          name: "Animals",
          path: "/AnimalsExploreDetail.html"
        },
      ]
    },
    {
      name: "About",
      path: "/about.html",
      hasSubItem: false
    },
    {
      name: "Album",
      path: "/album.html",
      hasSubItem: false
    }
  ];
  
  export default menu;