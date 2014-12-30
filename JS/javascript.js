/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {
  
  // Show div html based on role
  if (HelpCenter.user.role=="end_user"){
   $("div.enduser").show();
  }

  if (HelpCenter.user.role=="agent"){
   $("div.manager").show();
  }

  if (HelpCenter.user.role=="manager"){
   $("div.manager").show();
  }
  
  $('ul.article-list a:contains("[+Video]")').addClass('video');

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus
  $(".answer-body textarea").one("focus", function() {
    $(".answer-form-controls").show();
  });

  $(".comment-container textarea").one("focus", function() {
    $(".comment-form-controls").show();
  });

});
