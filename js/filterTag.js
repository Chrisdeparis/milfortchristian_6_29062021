// En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
// photographes est filtrée pour n'afficher que ceux qui correspondent à cette
// étiquette.

const filterTag = () => {
    const btns = document.querySelectorAll(".btn");
    
    let i;
    for (i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", (e) => {
        
  
        const listUsers = document.querySelectorAll(".user");
        // const tags = document.querySelector(".tags");
        const filter = e.target.dataset.filter;
        const tagName = document.getElementsByClassName(filter);
        e.preventDefault();
        console.log(filter);
        console.log(listUsers);
        listUsers.forEach((user) => {
          console.log(user);
          if (filter === "all") {
            console.log("filter === all");
            user.style.display = "block";
            console.log(user);
          } else {
            console.log(filter);
            console.log(tagName);
            user.style.display = "none";
            if (tagName) {
              console.log("filter click = "+filter);
              let j;
              for(  j=0; j<tagName.length; j++) {
                console.log(tagName[j].parentElement.parentElement.parentElement);
                tagName[j].parentElement.parentElement.parentElement.style.display = "block";
              }  
            }
          }
        });
      });
    }
    
  };
  
  filterTag();
  
  export default filterTag;