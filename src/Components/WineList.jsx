import { Container } from "react-bootstrap";
import { FaWineBottle } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";


const wine_list = [
    {"type": "SPUMANTI", "name": "Prosecco NV, Ronco Belvedere", "region": "Veneto", "price": {"glass": 17, "bottle": 68}},
    {"type": "SPUMANTI", "name": "Lambrusco di Sorbara Rosé, Azienda Agricola Zucchi", "region": "Emilia-Romagna", "price": {"glass": 18, "bottle": 72}},
    {"type": "SPUMANTI", "name": "Trento Brut Rose NV, Ferrari", "region": "Trentino", "price": {"glass": 25, "bottle": 100}},
    {"type": "BIANCHI", "name": "Etna Bianco 2022, Firriato", "region": "Sicily", "price": {"glass": 19, "bottle": 76}},
    {"type": "BIANCHI", "name": "Chardonnay 'Lara' 2020, Scarbolo", "region": "Friuli", "price": {"glass": 18, "bottle": 72}},
    {"type": "BIANCHI", "name": "Timorasso 'San Leto' 2018, Daniele Ricci", "region": "Piemonte (Skin Contact)", "price": {"glass": 18, "bottle": 72}},
    {"type": "BIANCHI", "name": "Gewürztraminer 2022, Elena Walch", "region": "Alto Adige", "price": {"glass": 21, "bottle": 84}},
    {"type": "BIANCHI", "name": "'Il Sangio' Bianco 2020, Podere Lecci e Brocchi", "region": "Toscana", "price": {"glass": 25, "bottle": 100}},
    {"type": "ROSATI", "name": "Magliocco Rosato 'Marinu' 2020, Maradei", "region": "Calabria", "price": {"glass": 17, "bottle": 68}},
    {"type": "ROSATI", "name": "Sangiovese Rosato 2022, Carleone", "region": "Toscana", "price": {"glass": 19, "bottle": 76}},
    {"type": "ROSSI", "name": "Chianti Classico 2020, Cigliano di Sopra", "region": "Toscana", "price": {"glass": 20, "bottle": 80}},
    {"type": "ROSSI", "name": "Chianti Classico Riserva 2018, Monte Bernardi", "region": "Toscana", "price": {"bottle": 92}},
    {"type": "ROSSI", "name": "Chianti Classico Gran Selezione 2015, Colombaio di Cencio", "region": "Toscana", "price": {"bottle": 120}},
    {"type": "ROSSI", "name": "Rosso di Montalcino 2019, Molino di Sant’Antimo", "region": "Toscana", "price": {"glass": 26, "bottle": 104}},
    {"type": "ROSSI", "name": "Rosso di Montalcino 2020, Valdicava", "region": "Toscana", "price": {"glass": 35, "bottle": 140}},
    {"type": "ROSSI", "name": "'Poggio alla Guardia' Maremma 2019, Rocca di Frassinello", "region": "Toscana", "price": {"glass": 18, "bottle": 72}},
    {"type": "ROSSI", "name": "'Tre' 2020, Brancaia", "region": "Toscana", "price": {"glass": 20, "bottle": 80}},
    {"type": "ROSSI", "name": "'Solengo' 2018, Argiano", "region": "Toscana", "price": {"bottle": 200}},
    {"type": "ROSSI", "name": "Nero d’Avola 2020, Baglio di Grisi", "region": "Sicilia", "price": {"glass": 15, "bottle": 60}},
    {"type": "ROSSI", "name": "Pinot Noir 'Bachgart' 2018, Klaus Lentsch", "region": "Alto Adige", "price": {"glass": 18, "bottle": 72}},
    {"type": "ROSSI", "name": "Barbera d’Asti 2019, Cascina Valle Asinari", "region": "Piemonte", "price": {"glass": 19, "bottle": 76}},
    {"type": "ROSSI", "name": "Croatina 'El Matt' 2019, Daniele Ricci", "region": "Piemonte", "price": {"glass": 25, "bottle": 100}}
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  function WineList() {
    // Raggruppa i vini per tipologia
    const groupedWines = {};
    wine_list.forEach((wine) => {
      if (!groupedWines[wine.type]) {
        groupedWines[wine.type] = [];
      }
      groupedWines[wine.type].push(wine);
    });
  
    return (
      <>
        <Container className="mb-5 text-center">
          {Object.keys(groupedWines).map((wineType) => (
            <div key={wineType}>
              <h2 className="mt-5 mb-0">{capitalizeFirstLetter(wineType)}</h2>
              {groupedWines[wineType].map((wine, index) => (
                <Container key={index} className="mb-3">
                  <h6>{wine.name}</h6>
                  <p>{wine.region}</p>
                  <p>
                    <FaWineBottle /> {wine.price.bottle} | <FaWineGlassAlt /> {wine.price.glass}
                  </p>
                </Container>
              ))}
            </div>
          ))}
        </Container>
      </>
    );
  }
  
  export default WineList;