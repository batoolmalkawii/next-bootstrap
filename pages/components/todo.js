import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

import AddForm from "../components/addForm";
import TodoList from "../components/todoList";

const itemsList = [
  {
    id: 1,
    name: "Eat, Pray, Love.",
    owner: "Elizabeth Gilbert",
    desc: "Elizabeth Gilbert's perfect world comes shattering down when she gets divorced. She then embarks on a journey across the world in an attempt to rediscover her true self.",
  },
  {
    id: 2,
    name: "The Kite Runner.",
    owner: "Khaled Hosseini",
    desc: "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.",
  },
  {
    id: 3,
    name: "The Uncommon Type.",
    owner: "Tom Hanks",
    desc: "A collection of seventeen wonderful short stories showing that two-time Oscar winner Tom Hanks is as talented a writer as he is an actor. A gentle Eastern European immigrant arrives in New York City after his family and his life have been torn apart by his country's civil war. ",
  },
  {
    id: 4,
    name: "فاتتني صلاة",
    owner: "إسلام جمال",
    desc: "في هذا الكتاب ستجد لماذا تبدو لك الاصلاة ثقيلة وكيف تحافظ عليها",
  },
];

export default function Todo(props) {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "pink" }} href="/">
              Book Store
            </Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col>Order Book</Col>
          <Col></Col>
          <Col>New in Store</Col>
        </Row>

        
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
          </Nav>
        </Navbar>
        <Row>
          <Col>
            <AddForm />
          </Col>
          <Col></Col>
          <Col>
            <TodoList todos={itemsList} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
