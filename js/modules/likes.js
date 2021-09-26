import data from "../FishEyeData.js";
import { media } from "./media.js";

export const likes = () => {
    let totalLikes = document.getElementById('likes').innerHTML;
    console.log(totalLikes);
    document.getElementById('likes').innerHTML = totalLikes;
    let heart = document.querySelector('.heart');
    
    heart.addEventListener('click', function(){
        let heartClicked = e.target.closest('.heart');
                console.log(heartClicked);
                totalLikes += 1;
                document.getElementById('likes').innerHTML = totalLikes;

    })
    const hearts = document.querySelectorAll('.heart');
    if(hearts){
        hearts.forEach(function(heart){
            heart.addEventListener('click', function(e){
                let heartClicked = e.target.closest('.heart');
                console.log(heartClicked);
                totalLikes += 1;
                document.getElementById('likes').innerHTML = totalLikes;
            })
        })

        

    }

}

// likes();
