import React from 'react';
import { Button, Card } from 'react-bootstrap';
import usePackage from '../Component/usePackage/usePackage';
import "./Packages.css"

const Packages = () => {
    const[packagesItem, setPackagesItem] = usePackage();
    console.log(packagesItem);
    
    
    return (
        <div>
            
           <div className='container card-item'>
           {
               packagesItem.map(item=>(
                        <Card className='shadow rounded m-4 p-3' style={{ width: '18rem' }}>
                        
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <p className="card-text">Droneshot:{item.drone}</p>
                        <p className="card-text">Photographer: {item.Photographer}</p>
                        <p className="card-text">Cinephotographer: {item.Cinephotographer}</p>
                        <p className="card-text">Images: {item.img}</p>
                        <p className="card-text">Hours: {item.Hour}</p>
                        <p className="card-text">Price: {item.rate} BDT</p>

                        <Button variant="primary">Book Now</Button>
                        </Card.Body>
                        </Card>
               ))
          
           }
           </div>
             
        </div>

        
    );
};

export default Packages;