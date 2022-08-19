import { lazy, Suspense } from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Spinner } from './components/UI/Spinner/Spinner';
import { Home } from "./routes/Home";

const Listing  = lazy(() => import(/* webpackPreload: true */ './routes/Listing'));

export const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="listing" element={(
                    <Suspense fallback={<Spinner />}>
                        <Listing />
                    </Suspense>
                )} />
            </Routes>
            <Footer />
        </>
    )
};
