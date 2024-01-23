import { Container } from "react-bootstrap";

const primiData = [
    {
      name: "MEZZELUNE DI ZUCCA",
      price: 26,
      description: "handmade butternut squash filled ravioli, pancetta, butter, Parmigiano Reggiano DOP®, sage",
    },
    {
      name: "CASARECCE TRAPANESE",
      price: 22,
      description: "tomato-almond pesto, basil, Pecorino Romano DOP",
    },
    {
      name: "AGNOLOTTI VERDI AL FORMAGGIO DI CAPRA",
      price: 27,
      description: "goat cheese filled pasta, orange-fennel butter",
    },
    {
      name: "RAVIOLI AI FUNGHI",
      price: 29,
      description: "mushroom and stracchino filled pasta, Urbani black truffle butter",
    },
    {
      name: "MALFALDINE NERO DI SEPPIA CON FRUTTI DI MARE",
      price: 35,
      description: "squid ink mafaldine, bay scallops, manila clams, PEI mussels, Mutti tomato, capers, olives, oregano",
    },
    {
      name: "TAGLIOLINI AL TARTUFO",
      price: 30,
      description: "Housemade tagliolini, Urbani fresh black winter truffle butter, Agriform Parmigiano Reggiano® DOP",
    },
    {
      name: "GNOCCHI CON POMODORO",
      price: 22,
      description: "Housemade ricotta gnocchi, tomato sauce, basil",
    },
    {
      name: "MAFALDINE ALLA BOLOGNESE",
      price: 28,
      description: "Housemade mafaldine pasta, pork and beef ragù alla Bolognese, 24-Month Parmigiano Reggiano® DOP",
    },
    {
      name: "RAVIOLI CACIO E PEPE",
      price: 24,
      description: "Housemade ravioli, Genuine Fulvi® Pecorino Romano, black pepper, butter",
    },
    {
      name: "TAGLIATELLE AL RAGÙ DI MANZO",
      price: 32,
      description: "Housemade 40-yolk tagliatelle, short rib ragù, Parmigiano Reggiano® DOP",
    },
  ];


function Primi () {
    return (
        <>
         <Container className="mb-5 text-center">
                <h2 className="mt-5 mb-4">Prmi</h2>
                {primiData.map((primi, index) =>
                (
                    <Container key={index} className="mb-3">
                        <h6>{primi.name}</h6>
                        <p className="mb-0">{primi.description}</p>
                        <p className="fw-bold mt-0">{primi.price}</p>
                    </Container>
                )
                )}
            </Container>
        </>
    )
}

export default Primi;