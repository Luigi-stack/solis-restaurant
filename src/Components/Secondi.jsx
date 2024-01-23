import { Container } from "react-bootstrap";

const mainDishesMenu = [
    {"name": "PARMIGIANA DI MELANZANE", "price": 24, "ingredients": ["eggplant", "tomato sauce", "mozzarella", "Parmigiano Reggiano DOP®"]},
    {"name": "PESCE ALLA GHIOTTA", "price": 33, "ingredients": ["market white fish", "Mutti tomato", "red onion", "taggiasca olives", "capers", "chili flake"]},
    {"name": "TAGLIATA DI MANZO", "price": 37, "ingredients": ["PEI Grass Fed flat iron steak", "potatoes", "arugula", "balsamic vinegar", "Parmigiano Reggiano DOP®"]},
    {"name": "POLLO ALLA MILANESE", "price": 27, "ingredients": ["breaded and fried chicken breast", "gem lettuce", "caper aioli", "lemon"]},
    {"name": "RISOTTO DI MARE", "price": 35, "ingredients": ["carnaroli rice", "lobster brodo", "Argentinian pink shrimp", "PEI mussels", "manila clams", "thyme"]},
    {"name": "PESCE ALLA GRIGLIA", "price": 49, "ingredients": ["whole grilled black sea bass", "broccolini", "bagna cauda", "lemon"]}
];

function Secondi () {
    return (
        <>
        <Container className="mb-5 text-center">
                <h2 className="mt-5 mb-4">Secondi</h2>
                {mainDishesMenu.map((secondi, index) =>
                (
                    <Container key={index} className="mb-3">
                        <h6>{secondi.name}</h6>
                        <p className="mb-0">{secondi.ingredients.join(", ")}</p>
                        <p className="fw-bold mt-0">{secondi.price}</p>
                    </Container>
                )
                )}
            </Container>
        </>
    )
}

export default Secondi;