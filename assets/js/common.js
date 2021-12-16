$(document).ready(function () {
  const categoryData = `[
    {
      "title":"Home",
      "icon":"assets/images/home.png",
      "link":"index.html"
    },
    {
      "title":"Explore",
      "icon":"assets/images/explore.png",
      "link":"explorer.html"
    },
    {
      "title":"Followers",
      "icon":"assets/images/following.png",
      "link":"followers.html"
    },
    {
      "title":"Following",
      "icon":"assets/images/following.png",
      "link":"following.html"
    },
    {
      "title":"Friends",
      "icon":"assets/images/friends.png",
      "link":"friends.html"
    },
    {
      "title":"Favorite",
      "icon":"assets/images/favorite.png",
      "link":"favorite.html"
    }
  ]`;

  $index = 0;
  $array = JSON.parse(categoryData);
  $html = "";
  $array.forEach((data, idx) => {
    $html +=
      '<div ><a href="' +
      data.link +
      '" class="flex gap-3 items-center cursor-pointer"><img src="';
    $html += data.icon + '" class="w-6" alt="side icon"/>';
    $html += '<span class="text-lg hover:text-red-500 text-black font-bold">';
    $html += data.title + "</span></a></div>";
  });
  $(".category-list").html($html);
});
