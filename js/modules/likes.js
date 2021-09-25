import data from "../FishEyeData.js";
import { media } from "./media.js";

export const likes = () => {
    const hearts = document.querySelectorAll('.heart');
    if(hearts){
        hearts.forEach(function(heart){
            heart.addEventListener('click', function(e){
                let heartClicked = e.target.closest('.heart');
                console.log(heartClicked);
                let modal = document.getElementById('openLightBox');
                modal.style.display = "none";
                // la valeur media.likes incrémentée
                media;
                console.log(media);
            })
        })

        

    }

}

// likes();
