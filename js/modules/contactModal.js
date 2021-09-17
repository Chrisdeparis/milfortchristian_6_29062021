const openContactModal = () => {
    const contactModal = document.querySelector(".contact");
  
    // Get the modal
    const modal = document.getElementById("contactModal");
  
    // Get the button that opens the modal
    const btn = document.querySelector(".contact");
  
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close-contact")[0];
  
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      console.log("clic contact btn");
      modal.style.display = "block";
    };
  
    // When the user clicks on <span> (x), close the modal
    console.log(span);
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
  openContactModal();