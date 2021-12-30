$(document).ready(function () {
  const userData = `[
    {
      "name":"Willsmith",
      "image":"assets/images/man1.png",
      "location":"Willsmith",
      "flag":"assets/images/flag_ca.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"edshreean",
      "image":"assets/images/man2.png",
      "location":"Ed Sheeran",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"billieeilish",
      "image":"assets/images/man3.png",
      "location":"Billie Eilish",
      "flag":"assets/images/flag_eu.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"manuelneuer",
      "image":"assets/images/man4.png",
      "location":"Manuel Neuer",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"toni.kr8s",
      "image":"assets/images/man5.png",
      "location":"Toni Kroos",
      "flag":"assets/images/flag_uk.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"Willsmith",
      "image":"assets/images/man1.png",
      "location":"Willsmith",
      "flag":"assets/images/flag_ca.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"edshreean",
      "image":"assets/images/man2.png",
      "location":"Ed Sheeran",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"billieeilish",
      "image":"assets/images/man3.png",
      "location":"Billie Eilish",
      "flag":"assets/images/flag_eu.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"manuelneuer",
      "image":"assets/images/man4.png",
      "location":"Manuel Neuer",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"toni.kr8s",
      "image":"assets/images/man5.png",
      "location":"Toni Kroos",
      "flag":"assets/images/flag_uk.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"Willsmith",
      "image":"assets/images/man1.png",
      "location":"Willsmith",
      "flag":"assets/images/flag_ca.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"edshreean",
      "image":"assets/images/man2.png",
      "location":"Ed Sheeran",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"billieeilish",
      "image":"assets/images/man3.png",
      "location":"Billie Eilish",
      "flag":"assets/images/flag_eu.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"manuelneuer",
      "image":"assets/images/man4.png",
      "location":"Manuel Neuer",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"toni.kr8s",
      "image":"assets/images/man5.png",
      "location":"Toni Kroos",
      "flag":"assets/images/flag_uk.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"Willsmith",
      "image":"assets/images/man1.png",
      "location":"Willsmith",
      "flag":"assets/images/flag_ca.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"edshreean",
      "image":"assets/images/man2.png",
      "location":"Ed Sheeran",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"billieeilish",
      "image":"assets/images/man3.png",
      "location":"Billie Eilish",
      "flag":"assets/images/flag_eu.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"manuelneuer",
      "image":"assets/images/man4.png",
      "location":"Manuel Neuer",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"toni.kr8s",
      "image":"assets/images/man5.png",
      "location":"Toni Kroos",
      "flag":"assets/images/flag_uk.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"Willsmith",
      "image":"assets/images/man1.png",
      "location":"Willsmith",
      "flag":"assets/images/flag_ca.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"edshreean",
      "image":"assets/images/man2.png",
      "location":"Ed Sheeran",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"billieeilish",
      "image":"assets/images/man3.png",
      "location":"Billie Eilish",
      "flag":"assets/images/flag_eu.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"manuelneuer",
      "image":"assets/images/man4.png",
      "location":"Manuel Neuer",
      "flag":"assets/images/flag_us.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    },
    {
      "name":"toni.kr8s",
      "image":"assets/images/man5.png",
      "location":"Toni Kroos",
      "flag":"assets/images/flag_uk.png",
      "msg":"Bro nice to meet you",
      "date":"11/16/19",
      "read":"true"
    }
  ]`

  const chatData = `[
    {
      "msg":"I missed up tonight",
      "sender":"me",
      "read":"true",
      "time":"11:40",
      "type":"chat"
    },
    {
      "msg":"I just lost another fight",
      "sender":"you",
      "read":"true",
      "time":"11:40",
      "type":"chat"
    },
    {
      "msg":"OK, it seems paskal is not hiding here",
      "sender":"me",
      "read":"true",
      "time":"11:40",
      "type":"chat"
    },
    {
      "msg":"OK, it seems paskal is not hiding here",
      "sender":"me",
      "read":"true",
      "time":"11:40",
      "type":"file",
      "name":"park.doc"
    },
    {
      "msg":"captuer",
      "sender":"me",
      "read":"true",
      "time":"11:40",
      "type":"chat"
    },
    {
      "msg":"Aaaahk!",
      "sender":"you",
      "read":"true",
      "time":"11:40",
      "type":"chat"
    },
    {
      "msg":"How about 23 out of 46?",
      "sender":"me",
      "read":"true",
      "time":"11:40",
      "type":"chat"
    },
    {
      "msg":"OK paskal it is not so bad staying here.",
      "sender":"me",
      "read":"true",
      "time":"11:40",
      "type":"chat"
    }
  ]`

  $index = 0;
  $array = JSON.parse(userData);
  $html = "";
  $array.forEach((data, idx) => {
    $html += '<div class="flex justify-beetween chat-user px-4 py-2 bg-white w-full gap-4 cursor-pointer" data-index='+idx+'><img src="'
    $html += data.image + '" alt="user" class="w-10 h-10"/><div class="flex flex-col w-3/4"><div class="break-all flex items-center justify-between text-sm "><span class="truncate w-1/2 font-bold">'
    $html += data.name + '</span><span class="flex-shrink-0 text-xs text-gray-500">' + data.date + '</span></div><div class="flex items-center">'
    if(data.read == "true"){
      $html += '<img src="assets/images/icons/ic_read.svg" alt="read"/>'
    }
    $html += '<p class="truncate text-xs text-gray-500">' + data.msg + '</p></div></div><img src="assets/images/icons/angle_right.svg" class=""/></div>'
  });
  $(".chat-users").html($html);


  $array = JSON.parse(chatData);
  $html = "";
  $array.forEach((data, idx) => {
    if(data.sender == "me"){
      $html += '<div class="bg-gray-300 p-2 flex flex-col max-w-3/4 max-w-md ml-auto rounded-md"><p>'
    }
    else{
      $html += '<div class="bg-white p-2 flex flex-col max-w-3/4 max-w-md mr-auto rounded-md"><p>'
    }
    $html += data.msg + '</p><div class="flex ml-auto gap-2"><span class="text-xs">'
    $html += data.time + '</span>'
    if(data.read == "true"){
      $html += '<img src="assets/images/icons/ic_read.svg" alt="read" />'
    }
    $html += '</div></div>'
  });
  $(".chat-box").html($html);

  let menuopen = false

  $(".chat-menu").on("click", function(){
    menuopen = !menuopen
    if(menuopen){
      $(".expand-menu").removeClass("hidden")
    }
    else{
      $(".expand-menu").addClass("hidden")
    }
  })

  $(".btn-attach").on("click", function(){
    menuopen = !menuopen
    if(menuopen){
      $(".menu-attach").removeClass("hidden")
    }
    else{
      $(".menu-attach").addClass("hidden")
    }
  })

  $(".chat-user").on("click", function(){
    var index = $(this).data("index")
    console.log()
    $(".selected-user-name").html(JSON.parse(userData)[index].name)
    $(".selected-user-image").attr("src", JSON.parse(userData)[index].image)
  })
});
