import React, { Component } from 'react';

function CustomerReview(props){

   return(
      <section class="pt-9 pb-11" id="reviews">
      <div class="container">
        <div class="row">
          <div class="col-12">

     
            <h4 class="mb-10 text-center">Customer Reviews</h4>

            <div class="row align-items-center">
              <div class="col-12 col-md-auto">

                <div class="dropdown mb-4 mb-md-0">

                  <a class="dropdown-toggle text-reset" data-toggle="dropdown" href="#">
                    <strong>Sort by: Newest</strong>
                  </a>

                  <div class="dropdown-menu mt-3">
                    <a class="dropdown-item" href="#!">Newest</a>
                    <a class="dropdown-item" href="#!">Oldest</a>
                  </div>

                </div>

              </div>
              <div class="col-12 col-md text-md-center">

                <div class="rating text-dark h6 mb-4 mb-md-0" data-value="4">
                  <div class="rating-item">
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="rating-item">
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="rating-item">
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="rating-item">
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="rating-item">
                    <i class="fa fa-star"></i>
                  </div>
                </div>

                <strong class="font-size-sm ml-2">Reviews (3)</strong>

              </div>
              <div class="col-12 col-md-auto">

                <a class="btn btn-sm btn-dark" data-toggle="collapse" href="#reviewForm">
                  Write Review
                </a>

              </div>
            </div>

            <div class="collapse" id="reviewForm">

              <hr class="my-8"></hr>

          
              <form>
                <div class="row">
                  <div class="col-12 mb-6 text-center">

   
                    <p class="mb-1 font-size-xs">
                      Score:
                    </p>

                    <div class="rating-form">

                      <input class="rating-input" type="range" min="1" max="5" value="5"/>

                      <div class="rating h5 text-dark" data-value="5">
                        <div class="rating-item">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fa fa-star"></i>
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-12 col-md-6">

                    <div class="form-group">
                      <label class="sr-only" for="reviewName">Your Name:</label>
                      <input class="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required/>
                    </div>

                  </div>
                  <div class="col-12 col-md-6">

                    <div class="form-group">
                      <label class="sr-only" for="reviewEmail">Your Email:</label>
                      <input class="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required/>
                    </div>

                  </div>
                  <div class="col-12">

                    <div class="form-group">
                      <label class="sr-only" for="reviewTitle">Review Title:</label>
                      <input class="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required/>
                    </div>

                  </div>
                  <div class="col-12">


                    <div class="form-group">
                      <label class="sr-only" for="reviewText">Review:</label>
                      <textarea class="form-control form-control-sm" id="reviewText" rows="5" placeholder="Review *" required></textarea>
                    </div>

                  </div>
                  <div class="col-12 text-center">

                    <button class="btn btn-outline-dark" type="submit">
                      Post Review
                    </button>

                  </div>
                </div>
              </form>

            </div>

            <div class="mt-8">

              <div class="review">
                <div class="review-body">
                  <div class="row">
                    <div class="col-12 col-md-auto">

                      <div class="avatar avatar-xxl mb-6 mb-md-0">
                        <span class="avatar-title rounded-circle">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>

                    </div>
                    <div class="col-12 col-md">

                      <div class="row mb-6">
                        <div class="col-12">

                          <div class="rating font-size-sm text-dark" data-value="5">
                            <div class="rating-item">
                              <i class="fa fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fa fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fa fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fa fa-star"></i>
                            </div>
                            <div class="rating-item">
                              <i class="fa fa-star"></i>
                            </div>
                          </div>

                        </div>
                        <div class="col-12">

                          <span class="font-size-xs text-muted">
                            Logan Edwards, <time datetime="2019-07-25">25 Jul 2019</time>
                          </span>

                        </div>
                      </div>

                      <p class="mb-2 font-size-lg font-weight-bold">
                        So cute!
                      </p>

                      <p class="text-gray-500">
                        Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio hendrerit.
                        Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.
                      </p>

                      <div class="row align-items-center">
                        <div class="col-auto d-none d-lg-block">

                          <p class="mb-0 font-size-sm">Was this review helpful?</p>

                        </div>
                        <div class="col-auto mr-auto">

                          <div class="rate">
                            <a class="rate-item" data-toggle="vote" data-count="3" href="#" role="button">
                              <i class="fe fe-thumbs-up"></i>
                            </a>
                            <a class="rate-item" data-toggle="vote" data-count="0" href="#" role="button">
                              <i class="fe fe-thumbs-down"></i>
                            </a>
                          </div>

                        </div>
                        <div class="col-auto d-none d-lg-block">

                          <p class="mb-0 font-size-sm">Comments (0)</p>

                        </div>
                        <div class="col-auto">

                          <a class="btn btn-xs btn-outline-border" href="#!">
                            Comment
                          </a>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

           
            </div>

            <nav class="d-flex justify-content-center mt-9">
              <ul class="pagination pagination-sm text-gray-400">
                <li class="page-item">
                  <a class="page-link page-link-arrow" href="#">
                    <i class="fa fa-caret-left"></i>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link page-link-arrow" href="#">
                    <i class="fa fa-caret-right"></i>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </section>

   );

}

export default  CustomerReview;