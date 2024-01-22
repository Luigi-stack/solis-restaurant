import { Container } from "react-bootstrap";

const pizza_menu = [
    {"name": "MARGHERITA", "price": 17, "ingredients": ["Mutti tomato", "mozzarella", "basil"]},
    {"name": "ZUCCA E GUANCIALE", "price": 22, "ingredients": ["butternut squash puree", "guanciale", "fontina", "mozzarella", "sage"]},
    {"name": "PROSCIUTTO E RUCOLA", "price": 26, "ingredients": ["Mutti tomato", "Prosciutto di Parma aged 18 months", "arugula", "mozzarella", "basil"]},
    {"name": "SALSICCIA E FUNGHI", "price": 21, "ingredients": ["Mutti tomato", "fennel sausage", "roasted mushroom", "provolone", "mozzarella"]},
    {"name": "DIAVOLA", "price": 23, "ingredients": ["Mutti tomato", "spianata spicy salami", "mozzarella", "taggiasca olives", "red onion", "calabrian chili", "scamorza"]},
    {"name": "BURRATA", "price": 27, "ingredients": ["Parmigiano Reggiano fonduta", "burrata", "roasted mushrooms", "mozzarella"]}
]

function Pizza () {
    return (
        <>
        <Container className="mb-5 text-center">
                <h2 className="mt-5 mb-0">Pizza</h2>
                <p className="mt-0">NEAPOLITAN STYLE</p>
                {pizza_menu.map((pizza, index) =>
                (
                    <Container key={index} className="mb-3">
                        <h6>{pizza.name}</h6>
                        <p>{pizza.ingredients.join(", ")}</p>
                        <p>{pizza.price}</p>
                    </Container>
                )
                )}
            </Container>
        </>
    )
}

export default Pizza;