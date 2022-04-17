import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import usePackage from '../Component/usePackage/usePackage';
import './Home.css'

const Home = () => {
    const [packagesItem, setPackagesItem] = usePackage();
    return (
        <div>
              <div>
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-image"
      src='slider-1.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-image"
      src="slider2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-image"
      src="slider3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
              </div>
              <h1 className='text-center text-info'>Services</h1>

              <div style={{display:'flex'}}>
                  
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