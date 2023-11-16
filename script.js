document.getElementById("contratacaoForm").addEventListener("submit", function(event){
  event.preventDefault();
  if (validateForm()) {
    this.submit();
  }
});

function validateForm() {
  return true;
}