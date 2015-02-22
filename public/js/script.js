var container = document.querySelector('.blog');
var msnry;

// initialize Masonry after all images have loaded
imagesLoaded( container, function() {
  msnry = new Masonry(container, {
    columnWidth: 200,
    itemSelector: '.post'
  });
});
