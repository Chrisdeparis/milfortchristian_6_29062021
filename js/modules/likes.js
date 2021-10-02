import data from "../FishEyeData.js";
import { media } from "./media.js";

export const likes = () => {
    //('likes.js');
    let hearts = document.querySelectorAll('.heart');
    //(hearts);
    for(let i=0; i<hearts.length; i++) {
        hearts[i].onclick = function(){
            //(hearts[i]);
        }
    }
    let totalLikes = document.getElementById('totalLikes').innerHTML;
    //(totalLikes);
    document.getElementById('totalLikes').innerHTML = totalLikes;
    // let heart = document.querySelector('.heart');
    
    
    
    // function count(){
    //     //("count function");
    //     hearts.forEach(item => {
        
    //         item.addEventListener('click', event => {
    //           //handle click
    //           //('clic');
    //         })
            
    //     })
    // }
    
    // count();
    // document.querySelectorAll('.heart')
      

    //     hearts.forEach( heart => {
    //         //(heart);
    //         heart.addEventListener('click', function like(e){
    //             let heartClicked = e.target.closest('.heart');
    //             //('heart Clicked');
                
    //             parseFloat(totalLikes) += 1;
    //             document.getElementById('totalLikes').innerHTML = totalLikes;
    //         })
    //     })


    
    //(hearts);
    //('fin des hearts')

}


likes();