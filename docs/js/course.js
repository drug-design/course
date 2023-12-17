document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.play-button-class').forEach(function(button) {
    button.addEventListener('click', function () {
      var audioId = button.getAttribute('data-audio');
      var audio = document.getElementById(audioId);
      audio.play();
    });
  });
});