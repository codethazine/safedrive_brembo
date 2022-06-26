<template>
  <div class="home">
    <div class="featured-background-container">
    </div>
    <div class="home-content">
      <div class="content-left">
        <h1>SafeDrive</h1>
        <p>Tailored insurance packages for enhanced driver safety.
          <br>Powered by Sensify.
        </p>
        <router-link class="typed-logo" to="/login">
          <button class="btn btn-primary home-button">Get Started</button>
        </router-link>
        <router-link class="header-link" :to="{ path: '/', hash: '#technology' }">
          <button class="btn btn-light home-button">Learn more</button>
        </router-link>
      </div>
     
      <div class="content-right">
        <img class="img-dash" src="../assets/dashboard_screenshot.jpeg">
       </div>
    </div>




    <section id = 'technology'>
      <div class="tech-background-container">
      </div>
      <div class="tech-content">
        <div class="content-right-alt">
          <h1>AI-powered metrics</h1>
          <p>
            Sensify allows us to collect an unprecedented amount of real time data from your car. 
            <br>We use that data to determine what your driving style is.
          </p>
        </div>
        <img class="transparent-img" src="../assets/architecture-transparent.png">
      </div>
    </section>
      <section id = 'team'>
        <div class="teamintro">
          <h1>Data Driven & Dangerous</h1>
        </div>
        <div class = 'cards-container'>
          <div class="card">
            <div class = 'card-img card-1'></div>
            <div class="container">
              <h4><b>Dario</b></h4>
              <p>Software Developer & CEO @OpenSquare</p>
            </div>
          </div>
          <div class="card">
            <div class = 'card-img card-2'></div>
            <div class="container">
              
              <h4><b>Carlo</b></h4>
              <p>AI & ML geek, Data Science student</p>
            </div>
          </div>
          <div class="card">
            <div class = 'card-img card-3'></div>
            <div class="container">
              <h4><b>Joan</b></h4>
              <p>Software Developer, Data Science student</p>
            </div>
          </div>
        </div>
      </section>

      <section class="home-container" id="faqs">
    <div class="pricing-row-title">
      <div class="faqs-title-container">
        <h1 class="faqs-title" style="margin-bottom: 0px;">
          FAQs
        </h1>
        <p class="faqs-subtitle">
          Frequently asked questions
        </p>
        <div class="faqs-title-line">
            Can't find the answer to your question? <br>
            Send us an e-mail at <a style="color: black" href="mailto:hello@safedrive.ml">hello@safedrive.ml</a> and we will get back to you as soon as possible!
        </div>
      </div>
      <div class="faqs-desc">
        <div class="faq-content">
          <div id="question1" class="faq-question">
            <input id="q1" type="checkbox" class="panel">
            <div class="plus">+</div>
            <label for="q1" class="panel-title">How do drivers benefit from SafeDrive? </label>
            <div class="panel-content">Drivers get to save money on their insurance, transparency on the pricing method, and feedback on their driving style.</div>
          </div>
          <div class="faq-question">
            <input id="q2" type="checkbox" class="panel">
            <div class="plus">+</div>
            <label for="q2" class="panel-title">How do Insurance Companies benefit from SafeDrive? </label>
            <div class="panel-content">Insurance companies save money on insurance claims, blackbox installation and maintance and provide a better product, that's tailored to it's users needs.</div>
          </div>
          <div class="faq-question">
            <input id="q4" type="checkbox" class="panel">
            <div class="plus">+</div>
            <label for="q4" class="panel-title">What's different from previous car insurance tech?</label>
            <div class="panel-content">SafeDrive, through Sensify collects more data, thus giving a more complete analysis of the accidents. This comes also with a real-time analysis of cases in which a driver should be careful and drive better, to avoid accidents. Another difference is that Sensify comes pre-build with the auto, thus it doesn't require additional manufacturing and maintance on the insurers part, like a blackbox for example.</div>
          </div>
          <div class="faq-question" style="border-bottom: 0px;">
            <input id="q3" type="checkbox" class="panel">
            <div class="plus">+</div>
            <label for="q3" class="panel-title">How will drivers data be handled?</label>
            <div class="panel-content">SafeDrive information security policies are guided by recognized international security standards and reference best practices to the largest extent possible. SafeDrive borrow best practices from COBIT and these ISO standards: 27001 (international information security standard), 27005 (information security risk management), 27701 (privacy information management systems / GDPR) and 27014 (governance of information security).</div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  padding: 0px 100px;
}

.img-dash {
  height: auto;
  width: 100%;
  border-radius:15px
}

.featured-background-container {
    width: 100%;
    height: 83vh;
    margin-left: -100px;
    margin-right: -100px;
    position: absolute;
    overflow: hidden;
    background-size: cover;
    background-image: url('../assets/tesla_sensify.jpg');
    background-color: rgb(255, 255, 255);
    background-position: center center;
    opacity: 0.5;
    
    --webkit-mask: linear-gradient(rgb(255, 255, 255), transparent);
    z-index: -1;
}
.home-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 83vh;
}

.home-button {
  margin-right: 10px;
}
.tech-background-container {
    width: 100%;
    height: 83vh;
    margin-left: -100px;
    margin-right: -100px;
    position: absolute;
    overflow: hidden;
    background-size: cover;
    background-image: url('https://wallpapercave.com/wp/wp6830287.gif');
    background-color: rgb(255, 255, 255);
    background-position: center center;
    opacity: 0.8;
    --webkit-mask: linear-gradient(rgb(255, 255, 255), transparent);
    z-index: -1;
}
.content-right-alt{
  color: white;
}

.content-right-alt p{
  color: white;
}

.content-right {
  width: 60%;
  border-radius: 20px;

}
.tech-content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 83vh;
}
#team{
  padding: 60px 0px;
}
.teamintro{
  color: coral;
  text-decoration: solid ;

}
.tech-img-wrapper{
  text-align: right;
}
.team{
  height: 100vh
}
.card{
  /* Add shadows to create the "card" effect */
  width: 30%;
  height: 70%;
  margin:10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.tech-card{
  width:700px;
  height:300px;
  margin:15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.tech-card-container{
  width: auto;
  height: auto;
}
/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.cards-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20 20px;
}
.card-img{
  height: 300px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 15px 15px 0 0
}
.card-1{
  background-image: url("../assets/brembo-dario.jpg");
}
.card-2{
  background-image: url("../assets/brembo-carlo.jpg");
}
.card-3{
  background-image: url("../assets/brembo-joan.jpg");
}
.card:hover{
  background-color: coral;
  color: black;
  cursor: pointer;
  transform: scale(1.03);
}
.dash{
  text-align:right;
  position:relative;
  justify-content: right;
  background-image: url('../assets/dashboard_screenshot.jpeg');
  background-size: contain;
  flex-wrap: wrap;
}
.faqs-title-container {
  width: 40%;
  text-align: left !important;
  margin-right: 2rem;
}
.faqs-desc {
  width: 60%;
  text-align: left !important;
}
.faqs-subtitle {
  font-size: 1.8rem;
}
.pricing-row-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;
}
#faqs {
  padding-top: 0px;
  padding-bottom: 0px;
}

#question1 {
  padding-top: 0px !important;
}
body {
  color: #333;
  background: #fcfcfc;
  font-family: 'Raleway', sans-serif;
  overflow-x: hidden;
}
.faq-header{
  font-size: 42px;
  border-bottom: 1px dotted #ccc;
  padding: 24px;
}
.faq-content {
  margin: 0 auto;
}
.faq-question {
  padding: 20px 0;
  border-bottom: 1px dotted #ccc;
}
#question5 {
  border-bottom: none;
}
.panel-title {
  font-size: 24px;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 10px 10px 0 48px;
  display: block;
  cursor: pointer;
}
.panel-content {
  font-size: 20px;
  padding: 0px 14px;
  margin: 0 40px;
  height: 0;
  overflow: hidden;
  z-index: -1;
  position: relative;
  opacity: 0;
  -webkit-transition: .4s ease;
  -moz-transition: .4s ease;
  -o-transition: .4s ease;
  transition: .4s ease;
}
.panel:checked ~ .panel-content{
  height: auto;
  opacity: 1;
  padding: 14px;
}
.plus {
  position: absolute;
  margin-left: 20px;
  margin-top: 4px;
  z-index: 5;
  font-size: 30px;
  line-height: 150%;
  -webkit-user-select: none;    
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-transition: .2s ease;
  -moz-transition: .2s ease;
  -o-transition: .2s ease;
  transition: .2s ease;
}
.panel:checked ~ .plus {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.panel {
  display: none;
}

.content-left {
  width: 40%;
}

.transparent-img {
  height: 50%;
}

@media screen and (max-width: 840px) {
  .transparent-img {
      width: 100%;
      height: auto;
  }

    .home {
      padding: 0px 20px;
    }

    .featured-background-container {
      margin-left: -20px !important;
      margin-right: -20px !important;
    }

    p {
      color: black;
    }

    .architecture {
      width: 100%;
    }
    .tech-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 83vh;
      }

      .content-right {
        display: none;
      }

      .tech-background-container {
        margin-left: -20px !important;
        margin-right: -20px !important;
      }

      .card {
        width: 100%;
      }

      .cards-container {
        display: flex;
        flex-direction: column;
      }

      .faqs-title-container {
        width: 100%;
        margin-bottom: 20px;
      }

      .faqs-desc {
        width: 100%;
      }

      .pricing-row-title {
        flex-direction: column;
      } 
      .home-content {
        /*flex-direction: column;*/
        
      }
      
      .content-left {
        width: 100%;
      }

      .img-dash {
          width: 100%;
      }


}
</style>
