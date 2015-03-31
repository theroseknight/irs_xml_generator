 var spinner= new Object()
var opts = {
  lines: 13, // The number of lines to draw
  length: 4, // The length of each line
  width: 2, // The line thickness
  radius: 6, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#FFF', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the currentSpinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '18%' // Left position relative to parent
};

var currentcurrentSpinner;

spinner.showLoadingSpinner=function(){
  opts.color="#FFF"
  currentSpinner = new Spinner(opts)
  $("#loading_spinner").css("display","block")
  var width=$(document).width()
  $("#loading_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('loading_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hideLoadingSpinner=function(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#loading_spinner").hide()
  },250)
}

spinner.showWorkingSpinner=function(){
  opts.color="#FFF"
  currentSpinner = new Spinner(opts)
  $("#working_spinner").css("display","block")
  var width=$(document).width()
  $("#working_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('working_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hideWorkingSpinner=function(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#working_spinner").hide()
  },250)
}

spinner.showUploadingSpinner=function(){
  opts.color="#FFF"
  currentSpinner = new Spinner(opts)
  $("#uploading_spinner").css("display","block")
  var width=$(document).width()
  $("#uploading_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('uploading_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hideUploadingSpinner=function(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#uploading_spinner").hide()
  },250)
}

spinner.show_printing_spinner=function(){
  opts.color="#FFF"
  currentSpinner = new Spinner(opts)
  $("#printing_spinner").css("display","block")
  var width=$(document).width()
  $("#printing_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('printing_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hide_printing_spinner=function
(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#printing_spinner").hide()
  },250)
}

spinner.show_saving_spinner=function(){
  opts.color="#3c763d"
  currentSpinner = new Spinner(opts)
  $("#saving_spinner").css("display","block")
  var width=$(document).width()
  $("#saving_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('saving_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hide_saving_spinner=function(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#saving_spinner").hide()
  },250)
}

spinner.show_creating_spinner=function(){
  opts.color="#3c763d"
  currentSpinner = new Spinner(opts)
  $("#creating_spinner").css("display","block")
  var width=$(document).width()
  $("#creating_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('creating_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hide_creating_spinner=function(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#creating_spinner").hide()
  },250)
}

spinner.showDeletingSpinner=function(){
  opts.color="#a94442"
  currentSpinner = new Spinner(opts)
  $("#deleting_spinner").css("display","block")
  var width=$(document).width()
  $("#deleting_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('deleting_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hideDeletingSpinner=function(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#deleting_spinner").hide()
  },250)
}

spinner.show_emailing_spinner=function(){
  opts.color="#3c763d"
  currentSpinner = new Spinner(opts)
  $("#emailing_spinner").css("display","block")
  var width=$(document).width()
  $("#emailing_spinner").css("left",width/2-150/2)
  var currentSpinnerTarget = document.getElementById('emailing_spinner');
  currentSpinner.spin(currentSpinnerTarget)
}

spinner.hide_emailing_spinner=function(){
  setTimeout(function(){
    currentSpinner.stop()
    $("#emailing_spinner").hide()
  },250)
}
