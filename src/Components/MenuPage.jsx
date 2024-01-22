import { Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Antipasti from './Antipasti'
import Primi from './Primi';
import Pizza from './Pizza';
import Secondi from './Secondi';


const MenuPage = () => {
    return (
        <>
            <Container className='navbartop'>
                <h1 className="text-center">Menù</h1>
                <Tabs
                    defaultActiveKey="antipasti"
                    id="justify-tab-example"
                    className="mb-3 border border-0"
                    justify
                >
                    <Tab eventKey="antipasti" title="Antipasti" className="bolder">
                        <Antipasti />
                    </Tab>
                    <Tab eventKey="primi" title="Primi">
                        <Primi />
                    </Tab>
                    <Tab eventKey="secondi" title="Secondi">
                        <Secondi />
                    </Tab>
                    <Tab eventKey="pizza" title="Pizza">
                        <Pizza />
                    </Tab>
                    <Tab eventKey="winelist" title="Wine List">
                        Wine List
                    </Tab>
                </Tabs>
            </Container>
        </>
    );
};

export default MenuPage;

