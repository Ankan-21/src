import React from 'react'
import img1 from "../../src/Image/img1.jpg"
import img2 from "../../src/Image/img2.jpg"
import img3 from "../../src/Image/img3.png"
import img4 from "../../src/Image/img4.svg"
import img5 from "../../src/Image/img5.svg"
import img6 from "../../src/Image/img6.svg"
import img8 from "../../src/Image/img8.jpg"
import img7 from "../../src/Image/img7.jpg"
export default function Home() {
  return (
    <>
      {/* carousel */}

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" height="500px" width="200px" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" height="500px" width="200px" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" height="500px" width="200px" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>




      </div>
      {/* carousel End */}

      {/* card  */}
      <div className='container '>
        <h1 className='services'>Our Services</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, qui.</p>
        <div className='row justify-content-center cards' >

          <div className='col-sm-4'>
            <div class="card" style={{ width: "18rem" }}>
              <img src={img4} class="card-img-top" height="140px" width="140px" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Consulting</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div class="card" style={{ width: "18rem" }}>
              <img src={img5} class="card-img-top" height="140px" width="140px" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Finance</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div class="card" style={{ width: "18rem" }}>
              <img src={img6} class="card-img-top" height="140px" width="140px" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Technology</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary  ">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card End  */}

      {/* Get all type of Solutions start */}
      <div className='solution    bg-light'>
        <h1>Get all type of Solutions</h1>
        <p className='get'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reiciendis.</p>
        <a href="#" class="btn btn-primary">Read More</a>

      </div>

      {/* Get all type of Solution end */}



      {/* We are Top Consulting Firm in the World  Start*/}

      <div className='container consulting'>
        <div className='row Top'>
          <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
            <h1>We are Top Consulting Firm in the World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime fuga quod aut architecto iure in mollitia blanditiis vel excepturi minus.</p>
            <a href="#" class="btn btn-primary">Read More</a>

          </div>


          <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
            <img src={img7} height="300px" width="500px" alt="" />
          </div>


        </div>

      </div>

      {/* We are Top Consulting Firm in the World End */}


      {/* The best business consultancy services in world Start */}
      <div class="card bg-primary border-0 rounded-0 p-5 best  business">
        <div class="container ">
          <div class="row justify-content-between align-items-center text-center text-md-left aos-init" data-aos="fade-in" data-aos-easing="linear" data-aos-delay="50">
            <div class="col-md-8 ">
              <h5 class="mb-1 best1">The best business consultancy services in world</h5>
              <p class="mb-0 best1">There are many variations of passages of Lorem Ipsum available the majority alteration.</p>
            </div>
            <div class="col-md-4 text-lg-right mt-md-0 mt-3">
              <a href="contact.html" class="btn btn btn-outline-light btn-pill">Request Quote</a>
            </div>
          </div>
        </div>
      </div>

      {/* The best business consultancy services in world End */}



      {/* Industry leader in consulting services Start */}
      <div class="container  Industry ">
        <div class="row justify-content-between align-items-center aos-init aos-animate" data-aos="fade-right" data-aos-easing="linear" data-aos-delay="50">
          <div class="col-md-5 leader ">
            <h2 class="mb-4">Industry leader in consulting services</h2>
            <p class="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!</p>
          </div>
          <div class="col-md-6 Industry">
            <img src={img8} class="w-100" height="400px" width="100px" alt="" />
          </div>
        </div>
      </div>

      {/* Industry leader in consulting services End */}




    </>
  )
}