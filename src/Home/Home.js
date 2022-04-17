import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import usePackage from '../Component/usePackage/usePackage';
import './Home.css'

const Home = () => {
    const [packagesItem, setPackagesItem] = usePackage();
    return (
        <div>
        <div className='navbar-margin'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-image"
                  src='slider-1.jpg'
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className='header-color'>A picture is worth a thousand words</h3>
                  <p className='text-color'> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-image"
                  src="slider2.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 className='header-color'>Ready to take you beyond your imagination!</h3>
                  <p className='text-color'>With the uniqueness of our concepts and hard working quality, we are always a step ahead from others.
                  We take photos so perfectly that you will feel the same that you had felt in that very special day
                  with your very special one.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-image"
                  src="slider3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 className='header-color'>Every moment of your life is beautiful. </h3>
                  <p className='text-color'>Your each movement,your each emotion is nothing but a beautiful picture and we just want to hold on those moments with our camera and make it a piece of art with our adroit editing.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
       </div>
              <h1 className='text-center text-info'>Services</h1>

              <div className='container services'>
                  
                  {
                      
                        packagesItem.map(item=>(
                                 <Card className='shadow rounded m-4 p-3' style={{ width: '18rem' }}>
                                 <Card.Body>
                                 <Card.Title>{item.name}</Card.Title>
                                 <p class="card-text">Droneshot:{item.drone}</p>
                                 <p class="card-text">Photographer: {item.Photographer}</p>
                                 <p class="card-text">Cinephotographer: {item.Cinephotographer}</p>
                                 <p class="card-text">Images: {item.img}</p>
                                 <p class="card-text">Hours: {item.Hour}</p>
                                 <p class="card-text">Price: {item.rate} BDT</p>
                                 </Card.Body>
                                 </Card>
                        ))
                   
                    }
                  
              </div>
               <div>
                   <footer>
                         
                        <hr />
                        <p className='text-center'>Copyright © 2021. All right reserved drissayon.com.bd</p>
                   </footer>
               </div>
        </div>
    );
};

export default Home;