import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <h1>
                Welcome to React App thats build using Webpack and Babel separately
            </h1>
            <Footer />
        </>
    )
};
