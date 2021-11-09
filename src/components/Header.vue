<template>
  <header class="header">
    <div class="overlay"></div>
    <!-- Top Header Area Start -->
    <section class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="content">
              <div class="left-content">
                <!-- <ul class="left-list">
                  <li>
                    <p>
                      <i class="fas fa-headset"></i>	Support
                    </p>
                  </li>
                </ul> -->
                <ul class="top-social-links">
                  <!-- <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li> -->
                  <li>
                    <a href="https://twitter.com/elasticbitcoin">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/elasticbitcoinxbt">
                      <i class="fab fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/zS2khZ4F7K">
                      <i class="fab fa-discord"></i>
                    </a>
                  </li>
                  <!-- <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li> -->
                </ul>
              </div>
              <div class="right-content">
                <ul class="right-list">
                  <!-- <li>
                    <div class="language-selector">
                      <select name="language" class="language">
                        <option value="1" selected="selected">EN</option>
                        <option value="2">IN</option>
                        <option value="3">BN</option>
                      </select>
                    </div>
                  </li> -->
                  <li>
                    <div class="notofication"  >
                      <a href="https://twitter.com/search?q=cryptowar" target="_blank">

                        <i class="far fa-bell"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="message"  >
                      <a href="mailto:hi@cryptowar.network" target="_blank">
                        <i class="far fa-envelope"></i>
                      </a>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Top Header Area End -->
    <!--Main-Menu Area Start-->
    <div class="mainmenu-area mainmenu-area2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <router-link class="navbar-brand d-lg-none" :to="{name: 'landing-page'}">
                <img loading="lazy" class="l2" src="../assets/images/cryptowar/xBlade-logo-03.webp" alt="" style="">

              </router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_menu" aria-controls="main_menu"
                      aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse fixed-height" id="main_menu">
                <div class="main-menu-inner">
                  <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item dropdown">
                      <a class="nav-link active dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
                         aria-expanded="false">
                        Home
                      </a>
                      <ul class="dropdown-menu" >
                        <li><a class="dropdown-item" href="index.html"> <i class="fa fa-angle-double-right"></i>Home 1</a></li>
                        <li><a class="dropdown-item" href="index2.html"> <i class="fa fa-angle-double-right"></i> Home 2</a></li>
                        <li><a class="dropdown-item" href="index3.html"> <i class="fa fa-angle-double-right"></i> Home 3</a></li>
                        <li><a class="dropdown-item" href="index4.html"> <i class="fa fa-angle-double-right"></i> Home 4</a></li>
                        <li><a class="dropdown-item" href="index5.html"> <i class="fa fa-angle-double-right"></i> Home 5</a></li>
                      </ul>
                    </li> -->
                    <!-- <li class="nav-item">
                      <a class="nav-link" href="/">Home</a>
                    </li> -->
                    <li class="nav-item">
                      <router-link class="nav-link" to="/buy">Buy xBlade</router-link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://wiki.cryptowar.network">Game Wiki</a>
                    </li>

                  </ul>
                  <router-link class="navbar-brand  d-none d-lg-block" :to="{name: 'landing-page'}">
                    <img loading="lazy" class="l2" src="../assets/images/cryptowar/xBlade-logo-02.webp" alt="" style="">

                  </router-link>


                  <ul class="navbar-nav ml-auto">

                    <!-- <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true"
                         aria-expanded="false">
                        Pages
                      </a>
                      <ul class="dropdown-menu" >
                        <li>
                          <router-link class="dropdown-item" :to="{name: 'about'}">
                            <i class="fa fa-angle-double-right"></i>About
                          </router-link>
                        </li>

                        <li><a class="dropdown-item" href="bonuse-page.html"> <i class="fa fa-angle-double-right"></i>Bonuse</a></li>
                        <li><a class="dropdown-item" href="ticket-page.html"> <i class="fa fa-angle-double-right"></i>Ticket Page</a></li>
                        <li><a class="dropdown-item" href="raffles-details.html"> <i class="fa fa-angle-double-right"></i>Raffles Details</a></li>
                        <li><a class="dropdown-item" href="games_details.html"> <i class="fa fa-angle-double-right"></i>Games Details</a></li>
                        <li><a class="dropdown-item" href="tournaments2.html"> <i class="fa fa-angle-double-right"></i>Tournaments Details</a></li>
                        <li><a class="dropdown-item" href="gamer-profile1.html"> <i class="fa fa-angle-double-right"></i>Gamer Profile Public</a></li>
                        <li><a class="dropdown-item" href="gamer-profile6.html"> <i class="fa fa-angle-double-right"></i>Gamer Problie Private </a></li>
                        <li>
                          <router-link class="dropdown-item" :to="{name: 'help'}"> <i class="fa fa-angle-double-right"></i>Help</router-link></li>
                        <li><a class="dropdown-item" href="404.html"> <i class="fa fa-angle-double-right"></i>404</a></li>
                      </ul>
                    </li> -->
                    <li class="nav-item">
                      <a class="nav-link" href="https://wiki.cryptowar.network/backers-and-partners">Partners</a>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/help">Help</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <!-- <li class="nav-item">
                      <a class="nav-link" href="https://test.cryptowar.network">Testnet</a>
                    </li> -->

                    <li>
                      <a href="https://play.cryptowar.network/#/"
                      class="mybtn1"
                      > Play now!</a>
                    </li>
                  </ul>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--Main-Menu Area Start-->
  </header>
</template>