import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainPage() {
    const products = [
        {name: "Мини зипчик", price: "10.99$", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSJbx7JWMhK7efFEaTnJUPq5_-bGRyMLZaQ&s"},
        {name: "Имеет вес", price: "15.99$", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-crumble-very-dark-green-marijuanna-in-zip-lock-3d-style-png-image_12719531.png"},
        {name: "Королевская хапка", price: "99.99$", img: "https://ampravda.ru/files/articles-2/66698/4nzid60g56n4.jpg"},
        {name: "Мини зипчик", price: "10.99$", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSJbx7JWMhK7efFEaTnJUPq5_-bGRyMLZaQ&s"},
        {name: "Имеет вес", price: "15.99$", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-crumble-very-dark-green-marijuanna-in-zip-lock-3d-style-png-image_12719531.png"},
        {name: "Королевская хапка", price: "99.99$", img: "https://ampravda.ru/files/articles-2/66698/4nzid60g56n4.jpg"},
        {name: "Мини зипчик", price: "10.99$", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSJbx7JWMhK7efFEaTnJUPq5_-bGRyMLZaQ&s"},
        {name: "Имеет вес", price: "15.99$", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-crumble-very-dark-green-marijuanna-in-zip-lock-3d-style-png-image_12719531.png"},
        {name: "Королевская хапка", price: "99.99$", img: "https://ampravda.ru/files/articles-2/66698/4nzid60g56n4.jpg"},
        {name: "Мини зипчик", price: "10.99$", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSJbx7JWMhK7efFEaTnJUPq5_-bGRyMLZaQ&s"},
        {name: "Имеет вес", price: "15.99$", img: "https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-crumble-very-dark-green-marijuanna-in-zip-lock-3d-style-png-image_12719531.png"},
        {name: "Королевская хапка", price: "99.99$", img: "https://ampravda.ru/files/articles-2/66698/4nzid60g56n4.jpg"},
    ]

    // {name: "Awesome product", price: "6.69$"}, {name: "Braincrushing product", price: "17.52$"}, {name: "Пиздатый короче product", price: "20.99$"},
    
    // берем массив, каким нибудь образом делим его на массивы по 4 и там уже че нибудь делаем

    console.log(products)

    return (
        <>
            <Container>
                <Row>
                    {products.map(element => (
                        <>
                        <Col>
                            <Card style={{ width: '18rem', height: "100%" }}>
                                <Card.Img variant="top" src={element.img} />
                                <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text>{element.price}</Card.Text>
                                    <Button variant="primary">В корзину</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        </>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default MainPage