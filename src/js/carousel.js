const glide = new Glide(".glide", {
   type: "carousel",
   gap: 2,
   perView: 4,
   breakpoints: {
      1920: {
         perView: 4
      },
      1260: {
         perView: 3
      },
      900: {
         perView: 2
      },
      600: {
         perView: 1
      },
   },
});

glide.mount();