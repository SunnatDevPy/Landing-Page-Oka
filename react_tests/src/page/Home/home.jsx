import Header from '../../components/Header/header';
import Footer from "../../components/footer/footer.jsx";
import Menu from "../../page/Menu/menu-page.jsx";
import Contact from "../contact/contact.jsx";

const Home = () => {
    return (
        <div className="section">
            <Header/>
            <main style={{flex: 1}}>
                <Menu/>
            </main>
            <Contact/>
            <Footer/>

        </div>);
};

export default Home;