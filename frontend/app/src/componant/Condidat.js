import React from 'react'

export default function Condidat() {
  return (
    <body>
    
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container-fluid px-md-4	">
      <a href="index.html">
            <svg id="logo-35" 
                width="50" 
                height="39" 
                viewBox="0 0 50 39" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" 
                class="ccompli1" fill="#007AFF"></path>
                <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" 
                class="ccustom" 
                fill="#312ECB"></path> 
            </svg>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="" class="nav-link">Accueil</a></li>
            <li class="nav-item"><a href="" class="nav-link">Offres</a></li>
            <li class="nav-item active"><a href="" class="nav-link">Canditats</a></li>
            <li class="nav-item"><a href="" class="nav-link">Aide</a></li>
            <li class="nav-item"><a href="" class="nav-link">Contact</a></li>
            <li class="nav-item cta mr-md-1"><a href="" class="nav-link">Poster annonce</a></li>
            <li class="nav-item cta cta-colored"><a href="" class="nav-link">Chercher emploi</a></li>

          </ul>
        </div>
      </div>
    </nav>
  
  <div class="hero-wrap hero-wrap-2" style={{}} data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text align-items-end justify-content-start">
        <div class="col-md-12 ftco-animate text-center mb-5">
            <p class="breadcrumbs mb-0"><span class="mr-3"><a href="">Acceuil <i class="ion-ios-arrow-forward"></i></a></span> <span>Canditats</span></p>
          <h1 class="mb-3 bread">La liste de vos candidats</h1>
        </div>
      </div>
    </div>
  </div>

      <section class="ftco-section ftco-candidates ftco-candidates-2 bg-light">
      <div class="container">
          <div class="row">
              <div class="col-lg-8 pr-lg-4">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="team d-md-flex p-4 bg-white">
                              <div class="img" style={{}}></div>
                              <div class="text pl-md-4">
                                  <h2>Danica Lewis</h2>
                                  <div class="reponse">
                                      <p><a href="#" class="btn2 btn">Accepter</a></p>
                                      <p><a href="#" class="btn3 btn">Refuser</a></p>
                                  </div>	
                              </div>
                          </div>
                      </div>
                  </div>
              
              </div>
              </div>
              <div class="col-lg-4 sidebar">
              <div class="sidebar-box bg-white p-4 ftco-animate">
                  <h3 class="heading-sidebar">catégorie</h3>
                  <form action="offresdemploi" method="get" class="search-form mb-3">
              <div class="form-group">
                <span class="icon icon-search"></span>
                <input class="form-control" type="text" name="search" placeholder="Search..."/>
              </div>
            </form>
                  <form action="#" class="browse-form">
                            <label for="option-job-1"><input type="checkbox" id="option-job-1" name="vehicle" value="" checked/>informatique</label>
          
                          </form>
              </div>

             
              
           
          </div>
      </div>
  </section>
  
  
</body>
  )
}
