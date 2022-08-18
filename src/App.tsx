import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Images } from './components/Images/Images';

export const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <section>
                <h1>React Boiler on the plate</h1>
                <Images />
            </section>
            <Footer />
        </>
    )
};
