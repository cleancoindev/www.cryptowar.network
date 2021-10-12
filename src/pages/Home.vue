<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from '../components/HelloWorld.vue'
// import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'

export default {
  name: 'home',
  components: {
    // Header,
    // HelloWorld,
    // Footer
  }
};

</script>

<template>


  <!-- Hero Area Start -->
  <div class="hero-area hero-area2 hero-area4">
    <img loading="lazy" class="shape parallax5" src="../assets/images/home/h2-shape.png" alt="">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="content">
            <div class="content">
              <h5 class="subtitle">
                PLAY GAMES WIN
              </h5>
              <h1 class="title">
                <img  loading="lazy" v-lazysizes :data-src="'../assets/images/text.png'" alt="">
              </h1>
              <div class="links">
                <a href="https://discord.gg/BdZSHsR9U9" class="mybtn1">Play Now</a>
                <!-- <a href="https://www.youtube.com/watch?v=jssO8-5qmag" class="video_btn play-video mfp-iframe">
                  <i class="fas fa-play"></i>
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hero Area End -->

  <!-- Counter Area Start -->
  <!-- <section class="counter-section counter-section2">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="left-info">
            <h5>Try to check out our next </h5>
            <h3>Tournaments!
            </h3>
            <a href="#" class="mybtn1">Join Us</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="prize-pool">
            <h6>Prize pool</h6>
            <h3>$800</h3>
            <div class="timecounter">
              <i class="far fa-clock"></i>
              <div data-countdown="2021/12/15"><span>105:</span><span>14:</span><span>00:</span><span>18</span></div>
            </div>

            <img  loading="lazy" v-lazysizes :data-src="../assets/images/s-box.png" alt="">
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="l-winner-slider-wrapper">
            <h4>
              LAST WINNERS
            </h4>
            <div class="l-winner-slider owl-carousel owl-theme owl-loaded">




              <div class="owl-stage-outer">
                <div class="owl-stage" style="transform: translate3d(-380.001px, 0px, 0px); transition: all 0s ease 0s; width: 1266.67px;"><div class="owl-item cloned" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/2.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/3.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/3.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item active" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/1.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item active" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/2.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item active" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/3.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/3.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/1.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/2.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div><div class="owl-item cloned" style="width: 96.667px; margin-right: 30px;"><div class="s-item">
                  <div class="img">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/l-winner/3.png" alt="">
                    <span>$800</span>
                  </div>
                </div></div></div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style=""><i class="fa fa-angle-left"></i></div><div class="owl-next" style=""><i class="fa fa-angle-right"></i></div></div><div style="display: none;" class="owl-dots"></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- Counter Area End -->

  <!-- Game play area start -->
  <section class="game-play-section">
    <!-- <img loading="lazy" class="left-img" src="../assets/images/game-play/left-img.png" alt=""> -->
    <!-- <img loading="lazy" class="right-img" src="../assets/images/game-play/right-img.png" alt=""> -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h5 class="subtitle">
              The Games You Love
            </h5>
            <h2 class="title ">
              PLAY AND WIN
            </h2>
            <h6 class="text">
              Where skill is rewarded.Join millions of players worldwide!
            </h6>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" src="../assets/images/game-play/1.png" alt="">
            </div>
            <div class="contant">
              <a href="https://discord.gg/BdZSHsR9U9/" class="mybtn1">Play</a>
              <!-- <h4>37 People Playing</h4>
              <ul>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm1.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm2.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm3.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm4.png" alt="">
                  </a>
                </li>
                <li>
									<span>
										32+
									</span>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" v-lazysizes src="../assets/images/game-play/2.png" alt="">
            </div>
            <div class="contant">
              <a href="https://discord.gg/BdZSHsR9U9/" class="mybtn1">Play</a>
              <!-- <h4>37 People Playing</h4>
              <ul>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm1.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm2.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm3.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm4.png" alt="">
                  </a>
                </li>
                <li>
									<span>
										32+
									</span>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" v-lazysizes src="../assets/images/game-play/3.png" alt="">
            </div>
            <div class="contant">
              <a href="https://discord.gg/BdZSHsR9U9/" class="mybtn1">Play</a>
              <!-- <h4>37 People Playing</h4>
              <ul>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm1.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm2.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm3.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm4.png" alt="">
                  </a>
                </li>
                <li>
									<span>
										32+
									</span>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" v-lazysizes src="../assets/images/game-play/4.png" alt="">
            </div>
            <div class="contant">
              <a href="https://discord.gg/BdZSHsR9U9/" class="mybtn1">Play</a>
              <!-- <h4>37 People Playing</h4>
              <ul>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm1.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm2.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm3.png" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img  loading="lazy" v-lazysizes :data-src="../assets/images/player/sm4.png" alt="">
                  </a>
                </li>
                <li>
									<span>
										32+
									</span>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-lg-12 text-center">
          <a href="#" class="b-all-btn">Browser All <img  loading="lazy" v-lazysizes :data-src="../assets/images/arrow.png" alt=""></a>
        </div>
      </div> -->
    </div>
  </section>
  <!-- Game play area end -->

  <!-- Latest arcive area start -->
  <!-- <section class="latest-arcive2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h5 class="subtitle">
              True Wins closer than they seem
            </h5>
            <h2 class="title ">
              Latest Activities
            </h2>
            <h6 class="text">
              Where skill is rewarded.Join millions of players worldwide!
            </h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav  mb-3"  role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Leaderboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">changellenge</a>
            </li>
          </ul>
          <div class="tab-content l-a-nav" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div class="row">
                <div class="col-lg-5">
                  <div class="left-content">
                    <div class="heading-area">
                      <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i2.png" alt="">
                      <h6>Latest Changellenge</h6>
                      <h3>Top Players</h3>
                    </div>
                    <ul>
                      <li>
                        <div class="info-box">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i3.png" alt="">
                          <div class="content">
                            <h4>Levels &amp; Rewards</h4>
                            <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="info-box">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i4.png" alt="">
                          <div class="content">
                            <h4>Fast</h4>
                            <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="info-box">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i5.png" alt="">
                          <div class="content">
                            <h4>Fair</h4>
                            <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="l-arcive-box2-wrapper">
                    <div class="l-arcive-box2">
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa4.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m1.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Lee Miller</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>_ 25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa5.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m2.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>John Ray</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>+ 25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa6.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m3.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Gilbert Ruiz</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa7.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m4.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Lee Miller</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>_ 25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa8.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m5.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Erik Adams</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa9.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m6.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Gina Mills</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>+ 25.8772200 BTC</h6>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div class="row">
                <div class="col-lg-5">
                  <div class="left-content">
                    <div class="heading-area">
                      <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i2.png" alt="">
                      <h6>Latest Changellenge</h6>
                      <h3>Top Players</h3>
                    </div>
                    <ul>
                      <li>
                        <div class="info-box">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i3.png" alt="">
                          <div class="content">
                            <h4>Levels & Rewards</h4>
                            <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="info-box">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i4.png" alt="">
                          <div class="content">
                            <h4>Fast</h4>
                            <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="info-box">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/i5.png" alt="">
                          <div class="content">
                            <h4>Fair</h4>
                            <p>Join a grand adventure of 7 levels and unlimited milestone rewards

                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="l-arcive-box2-wrapper">
                    <div class="l-arcive-box2">
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa4.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m1.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Lee Miller</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>_ 25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa5.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m2.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>John Ray</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>+ 25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa6.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m3.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Gilbert Ruiz</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa7.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m4.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Lee Miller</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>_ 25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa8.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m5.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Erik Adams</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>25.8772200 BTC</h6>
                        </div>
                      </div>
                      <div class="s-a-b">
                        <div class="left">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/sa9.png" alt="">
                          <div class="content">
                            <div class="left2">
                              <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/m6.png" alt="">
                            </div>
                            <div class="right2">
                              <h4>Gina Mills</h4>
                              <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <img  loading="lazy" v-lazysizes :data-src="../assets/images/arcive/mony.png" alt="">
                          <h6>+ 25.8772200 BTC</h6>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- Latest arcive area End -->

  <!-- Ex-lottery Area Start -->
  <!-- <section class="ex-lottery ex-lottery2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h5 class="subtitle">
              Exclusive Lottery
            </h5>
            <h2 class="title ">
              Raffles Ending Soon
            </h2>
            <h6 class="text">
              Now's your chance to win a exclusive product!
            </h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="ex-lottery-slider owl-carousel owl-theme owl-loaded">




            <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1140px, 0px, 0px); transition: all 0s ease 0s; width: 3800px;"><div class="owl-item cloned" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/2.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX - JETBLACK</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item cloned" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/3.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX Cloud II Gunmetal</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item cloned" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/1.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX Pulsefire FPS PRO</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item active" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/1.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX Pulsefire FPS PRO</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item active" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/2.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX - JETBLACK</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item active" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/3.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX Cloud II Gunmetal</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/1.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX Pulsefire FPS PRO</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item cloned" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/1.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX Pulsefire FPS PRO</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item cloned" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/2.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX - JETBLACK</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div><div class="owl-item cloned" style="width: 350px; margin-right: 30px;"><div class="slider-item">
              <div class="single-tikit">
                <div class="image">
                  <span class="tag">Ending Soon</span>
                  <img  loading="lazy" v-lazysizes :data-src="../assets/images/product/3.png" alt="">
                </div>
                <div class="content">
                  <div class="top-area">
                    <div class="top-info">
                      <span><i class="far fa-clock"></i>13 Hours Left</span>
                      <span><i class="fas fa-ticket-alt"></i>99 Tickets Left</span>
                    </div>
                    <div class="top-bar">
                      <div class="progress-bar"></div>
                      <div class="main-bar"></div>
                    </div>
                  </div>
                  <div class="content-area">
                    <h4>HyperX Cloud II Gunmetal</h4>
                    <div class="c-bottom">
                      <span>Valued at €51.99</span>
                      <a href="#" class="mybtn1">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style=""><i class="fa fa-angle-left"></i></div><div class="owl-next" style=""><i class="fa fa-angle-right"></i></div></div><div style="display: none;" class="owl-dots"></div></div></div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- Ex-lottery Area End -->

  <!-- Recent Winner Area Start -->
  <section class="recent-winners">
    <div class="container">
      <!-- <div class="row">
        <div class="col-lg-12">
          <div class="top-section">
            <h3>Recent winners</h3>
            <a href="#">View all</a>
          </div>
        </div>
      </div> -->
      <div class="row">
        <!-- <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="single-winner">
            <div class="img">
              <img  loading="lazy" v-lazysizes :data-src="../assets/images/r-winner/1.png" alt="">
            </div>
            <div class="content">
              <div class="top-content">
                <img  loading="lazy" v-lazysizes :data-src="../assets/images/r-winner/p1.png" alt="">
                <div class="lc">
                  <h6>Vicky Hart</h6>
                  <span>3 days ago</span>
                </div>
              </div>
              <div class="numbers">
                <span>08</span>
                <span>15</span>
                <span>18</span>
                <span>33</span>
                <span>35</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="single-winner">
            <div class="img">
              <img  loading="lazy" v-lazysizes :data-src="../assets/images/r-winner/2.png" alt="">
            </div>
            <div class="content">
              <div class="top-content">
                <img  loading="lazy" v-lazysizes :data-src="../assets/images/r-winner/p2.png" alt="">
                <div class="lc">
                  <h6>Vicky Hart</h6>
                  <span>3 days ago</span>
                </div>
              </div>
              <div class="numbers">
                <span>08</span>
                <span>15</span>
                <span>18</span>
                <span>33</span>
                <span>35</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="single-winner">
            <div class="img">
              <img  loading="lazy" v-lazysizes :data-src="../assets/images/r-winner/3.png" alt="">
            </div>
            <div class="content">
              <div class="top-content">
                <img  loading="lazy" v-lazysizes :data-src="../assets/images/r-winner/p3.png" alt="">
                <div class="lc">
                  <h6>Vicky Hart</h6>
                  <span>3 days ago</span>
                </div>
              </div>
              <div class="numbers">
                <span>08</span>
                <span>15</span>
                <span>18</span>
                <span>33</span>
                <span>35</span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <!-- Recent Winner Area End -->

  <!-- join us area start -->
  <section class="join_us join_us2 join_us3">
    <img loading="lazy" class="l-image" src="../assets/images/joinus_left_img.png" alt="">
    <img loading="lazy" class="r-image" src="../assets/images/joinus-bg2.webp" alt="">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-xl-7">
          <div class="section-heading content-left">
            <h5 class="subtitle">
              Every day lots of wins
            </h5>
            <h2 class="title ">
              Be One of Them
            </h2>
            <h6 class="text">
              Get started in less than 5 min and experience crypto game like never before.
            </h6>
            <a href="https://discord.gg/BdZSHsR9U9" class="mybtn1">Play Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- join us area  end -->




</template>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
