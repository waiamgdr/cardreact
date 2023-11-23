import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import produit from './produit';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';






  
const a= prompt("Enter your first name:");
const App = () => {
  
 


  return (
    <div className="info"> 
    
    <div className='alert' style={{ width: 500 }} >
    <h2>hello , {a ? a : "there !"}!</h2>
    {a && <img src='https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=555&w=986'/>}
    </div>

       


            <div className="iro">


              
            <Name produit={produit}></Name>
           <Price produit={produit} ></Price>
           <Description produit={produit} ></Description>
      
           </div>
    
           <div id="imge">
           <Image  produit={produit} ></Image>
     
           </div>

           <Card style={{ width: 500 }}>
      <Card.Img variant="top" src={produit.image} />
      <Card.Body>
        <Card.Title><Name produit={produit}></Name></Card.Title>
        <Card.Text>
        <Price produit={produit} ></Price>
           <Description produit={produit} ></Description>
        </Card.Text>
        
        
      </Card.Body>
    </Card>
    
        {/* </div> */}


         
       

         



        

     
    </div>
  )
}

export default App