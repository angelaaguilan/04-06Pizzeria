import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import pizzeriaHeader from '../assets/imgs/pizzeriaHeader.png';
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {  
  // Estados
    const [pizzas, setPizzas] = useState([]);

  // Conectar y consumir la API
  const url = "http://localhost:5000/api/pizzas/";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header
        urlImage={pizzeriaHeader}
        altImage="Pizzería Mamma Mia"
        title="¡Pizzería Mamma Mia!"
        description="Tenemos las mejores pizzas que podrás encontrar!"
      />

      <Container className=" py-5">
        <Row xs={1} md={2} className="g-4">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;