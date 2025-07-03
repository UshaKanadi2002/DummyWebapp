function toggleSkill(element) {
  element.classList.toggle("active-skill");
}


$(function (){
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    alert("Thankyou for messageing me. I will get back to you soon.");
    $(this).trigger("reset");
  });
});
