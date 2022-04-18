import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Component/Firebase/Firebase.init';
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
              <h1 className='text-center text-secondary fw-bold mt-4'>Services</h1>

              <div className='container services'>
                  
                  {
                      
                        packagesItem.map(item=>(
                                 <Card className='shadow rounded bg-secondary text-black m-5 p-3 fw-bold' style={{ width: '18rem' }}>
                                 <Card.Body>
                                 <img src={item.Topimg} className="card-img-top" alt="..."/>
                                 <Card.Title className='ms-5 mt-3'>{item.name}</Card.Title>
                                 <p className="card-text ms-4 mt-3">Droneshot: {item.drone}</p>
                                 <p className="card-text ms-4">Photographer: {item.Photographer}</p>
                                 <p className="card-text ms-4">Cinephotographer: {item.Cinephotographer}</p>
                                 <p className="card-text ms-4 ">Images: {item.img}</p>
                                 <p className="card-text ms-4">Hours: {item.Hour}</p>
                                 <p className="card-text ms-4">Price: {item.rate} BDT</p>
                                 <Link to='/checkout'><Button className='ms-5 mt-3' variant="primary">Book Now</Button></Link>
                                 </Card.Body>
                                 </Card>
                        ))
                   
                    }
                  
              </div>
               

               
        </div>
    );
};

export default Home;