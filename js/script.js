function select(item) {
  $("#bottom_bar a").removeClass("bottom_item_active")
  item.addClass("bottom_item_active");

  $("#root .page").hide();
  switch (item.text()) {
    case "Home":
      $("#page_a").show();
      break;
    case "MyTrip":
      $("#page_b").show();
      break;
    case "MyAccount":
      $("#page_c").show();
      break;
    default:

  }
}

var actItemClick = function(event) {
  var title = $(this).children(".act_name").text();
  $("#sub_title").text(title);
  $("#root .page").hide();
  $("#sub_page").show();
};

function addActivity(code) {
  $("#add_activity").before('  <li class="act_item"><span class="act_name">' +
    'Trip' + code + ' </span><span class="right">&#62;</span> </li>');
  $(".act_item").click(actItemClick);
}

var activitys = new Array();

$(function() {
  $("#bottom_bar a").click(function() {
    select($(this));
  })

  $("#add_activity").click(function(event) {
    $("#dialog_page").show();
  });

  $("#dialog_page,#close").click(function(event) {
    $("#dialog_page").hide();
  });

  $("#dialog").click(function(event) {
    event.stopPropagation();
  });

  
  $("#act_form").submit(function(event) {
    $("#dialog_page").hide();
    var code = $("#act_code").val();
    activitys.push(code);
    addActivity(code);
    $("#act_code").val("");
    return false;
  });

  $(".act_item").click(actItemClick);

  $("#back").click(function(event) {
    var item = $("#bottom_bar a").eq(1);
    select(item);
  });

  $(".box").click(function(event) {
    if($(this).hasClass("select")){
      $(this).removeClass("select");
    }else{
        $(".box").removeClass("select");
        $(this).addClass("select")
    }
  });

})
