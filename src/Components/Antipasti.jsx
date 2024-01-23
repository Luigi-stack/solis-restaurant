import { Container } from "react-bootstrap";

const antipastiData = [
    {
        name: "PANE RUSTICO",
        price: 4,
        description: "housemade rustic bread, Olitalia extra virgin olive oil",
    },
    {
        name: "INSALATA VERDE",
        price: 13,
        description: "mixed greens, shaved vegetables, prosecco vinaigrette, Pecorino Romano DOP",
    },
    {
        name: "CAVOLETTI DI BRUXELLES",
        price: 15,
        description: "crispy brussels sprouts, bacon-onion jam",
    },
    {
        name: "INSALATA DI TROTA",
        price: 19,
        description: "mixed greens, pecorino dressing, smoked trout, Pecorino Romano DOP, anchovy breadcrumbs",
    },
    {
        name: "BURRATA CON UVA",
        price: 23,
        description: "housemade burrata, smoked grape compote, mint",
    },
    {
        name: "FOCACCIA ROSSA",
        price: 8,
        description: "housemade focaccia, Mutti tomato",
    },
    {
        name: "BARBABIETOLE",
        price: 14,
        description: "marinated beets, ricotta, herbs, pistachio",
    },
    {
        name: "CARNE CRUDA",
        price: 18,
        description: "raw PEI beef, ROI carte noire extra virgin olive oil, caper aioli",
    },
    {
        name: "SALUMI E FOCACCIA",
        price: 23,
        description: "chef's selection of Italian salumi, focaccia genovese, seasonal accompaniments",
    },
    {
        name: "GRAN TAGLIERE",
        price: 39,
        description: "chef’s selection of Italian meats, cheeses, seasonal accompaniments",
    },
];

function Antipasti() {

    return (
        <>
            <Container className="mb-5 text-center">
                <h2 className="mt-5 mb-4">Antipasti</h2>
                {antipastiData.map((antipasto, index) =>
                (
                    <Container key={index} className="mb-3">
                        <h6>{antipasto.name}</h6>
                        <p className="mb-0">{antipasto.description}</p>
                        <p className="fw-bold mt-0">{antipasto.price}</p>
                    </Container>
                )
                )}
            </Container>
        </>
    )
}

export default Antipasti;