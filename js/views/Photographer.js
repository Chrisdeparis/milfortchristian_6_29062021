const Photographer = () => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FishEye</title>
    <link rel="stylesheet" href="css/index.css" />
  </head>
  <body>
    <div class="banner">
      <header>
        <div class="contenu">Passer au contenu</div>
        <div class="top-line">
          <a href="" id="logo">
            <div class="logo">
              <img src="img/FishEyeLOGO.png" alt="Fisheye Home Page" />
            </div>
          </a>
        </div>
        <div class="photographer">
          <div class="info">
            <h1 class="name">Mimi Keel</h1>
            <p class="city">London, UK</p>
            <p class="tagline">Voir le beau dans le quotidien</p>
            <ul class="tags">
              <li><a href="#">#portrait</a></li>
              <li><a href="#">#events</a></li>
              <li><a href="#">#travel</a></li>
              <li><a href="#">#animals</a></li>
            </ul>
          </div>
          <div>
            <div class="contact" alt="Contact Me">
              <p>Contactez-moi</p>
            </div>
          </div>
          <div class="user">
            <div class="circle thumb">
              <div class="crop">
                <img src="img/MimiKeel.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="sort-by">
      <p>Trier par</p>
      <div class="dropdown-open">
        <ul>
          <li>
            Popularité
            <img class="chevron" src="img/chevron-up-solid.svg" alt="" />
          </li>
          <li>Date</li>
          <li>Titre</li>
        </ul>
      </div>
    </div>
    <!-- The Modal Contact -->
    <div id="contactModal" class="modal-contact">
      <!-- Modal content -->
      <div class="modal-content-contact">
        <div>
          <p class="title">Contactez-moi</p>
          <span class="close-contact"><img src="img/times-solid-white.svg" alt=""/></span>
        </div>
        
        <p class="name">Mimi Keel</p>
        <div class="contact-form">
          <form>
            <label for="">Prénom</label><br/>
            <input type="text"/><br/>
            <label for="">Nom</label><br/>
            <input type="text"/><br/>
            <label for="">Email</label><br/>
            <input type="text"/><br/>
            <label for="">Votre message</label><br/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div class="btn-form">Envoyer</div>
          </form>
        </div>
        
      </div>
    </div>
    <!-- The Modal OpenLightBox -->
    <div id="openLightBox" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="lightBox">
          <div class="top">
            <span class="close">
              <img src="img/times-solid.svg" alt="" />
            </span>
          </div>
          <div class="mid">
            <img class="chevron-left" src="img/chevron-left-solid.svg" alt="" />
            <img
              class="big-img"
              src="img/Photos/Mimi/Animals_Rainbow.jpg"
              alt=""
            />
            <img
              class="chevron-right"
              src="img/chevron-right-solid.svg"
              alt=""
              srcset=""
            />
          </div>
          <div class="bottom">
            <p class="lightBox">Arc-en-ciel</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="sticky-cta">
        <div>
          <p class="cta-likes">297 081</p>
          <img class="cta-heart" src="img/heart-solid-black.svg" alt="" />
        </div>
        <p class="cta-price">300€ / jour</p>
      </div>
      <div id="photos-section">
        <div>
          <img
            class="thumb-img"
            src="img/Photos/Mimi/Animals_Rainbow.jpg"
            alt="“Lilac breasted roller, closeup view"
          />
          <div class="thumb-info">
            <p>Arc-en-ciel</p>
            <div class="thumb-likes">
              <div class="likes">
                <p>12</p>
              </div>
              <img class="heart" src="img/heart-solid.svg" alt="likes" />
            </div>
          </div>
        </div>
        <div>
          <img
            class="thumb-img"
            src="img/Photos/Mimi/Travel_Lonesome.jpg"
            alt=""
          />
          <div class="thumb-info">
            <p>Solitude</p>
            <div class="thumb-likes">
              <div class="likes">
                <p>12</p>
              </div>
              <img class="heart" src="img/heart-solid.svg" alt="likes" />
            </div>
          </div>
        </div>
        <div>
          <img
            class="thumb-img"
            src="img/Photos/Mimi/Event_SeasideWedding.jpg"
            alt=""
          />
          <div class="thumb-info">
            <p>Mariage à la mer</p>
            <div class="thumb-likes">
              <div class="likes">
                <p>12</p>
              </div>
              <img class="heart" src="img/heart-solid.svg" alt="likes" />
            </div>
          </div>
        </div>
        <div>
          <img
            class="thumb-img"
            src="img/Photos/Mimi/Portrait_Background.jpg"
            alt=""
          />
          <div class="thumb-info">
            <p>Solitude</p>
            <div class="thumb-likes">
              <div class="likes">
                <p>12</p>
              </div>
              <img class="heart" src="img/heart-solid.svg" alt="likes" />
            </div>
          </div>
        </div>
        <div>
          <img
            class="thumb-img"
            src="img/Photos/Mimi/Event_PintoWedding.jpg"
            alt=""
          />
          <div class="thumb-info">
            <p>Solitude</p>
            <div class="thumb-likes">
              <div class="likes">
                <p>12</p>
              </div>
              <img class="heart" src="img/heart-solid.svg" alt="likes" />
            </div>
          </div>
        </div>
        <div>
          <img
            class="thumb-img"
            src="img/Photos/Mimi/Portrait_Wednesday.jpg"
            alt=""
          />
          <div class="thumb-info">
            <p>Solitude</p>
            <div class="thumb-likes">
              <div class="likes">
                <p>12</p>
              </div>
              <img class="heart" src="img/heart-solid.svg" alt="likes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
    `;
    
};