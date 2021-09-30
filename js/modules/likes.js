import data from "../FishEyeData.js";
import { media } from "./media.js";

export const likes = () => {
    console.log('likes.js');
    let hearts = document.querySelectorAll('.heart');
    console.log(hearts);
    for(let i=0; i<hearts.length; i++) {
        hearts[i].onclick = function(){
            console.log(hearts[i]);
        }
    }
    let totalLikes = document.getElementById('totalLikes').innerHTML;
    console.log(totalLikes);
    document.getElementById('totalLikes').innerHTML = totalLikes;
    // let heart = document.querySelector('.heart');
    
    
    
    // function count(){
    //     console.log("count function");
    //     hearts.forEach(item => {
        
    //         item.addEventListener('click', event => {
    //           //handle click
    //           console.log('clic');
    //         })
            
    //     })
    // }
    
    // count();
    // document.querySelectorAll('.heart')
      

    //     hearts.forEach( heart => {
    //         console.log(heart);
    //         heart.addEventListener('click', function like(e){
    //             let heartClicked = e.target.closest('.heart');
    //             console.log('heart Clicked');
                
    //             parseFloat(totalLikes) += 1;
    //             document.getElementById('totalLikes').innerHTML = totalLikes;
    //         })
    //     })


    
    console.log(hearts);
    console.log('fin des hearts')

}


likes();