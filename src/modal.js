(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    console.log(refs)
    
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal); 
    function toggleModal() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll")
    }  
})();

