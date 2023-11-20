// for input
let inputs = document.querySelectorAll(".header_section .form-control");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length == 0) {
      input.classList.remove("filled");
    } else {
      input.classList.add("filled");
    }
  });
});
// $('.header_section .input').addEventListener('input', () => {
//     console.log('hurray!')
// })

$(document).ready(function () {
  $(".js-example-basic-multiple").select2();
});

// setTimeout(() => {
//     $('.select2-container').addClass('form-control')
// }, 10);
