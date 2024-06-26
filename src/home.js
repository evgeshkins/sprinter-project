import React from "react"
import Header from "./components/header"
import MainContainer from './components/main-container'
import { SectionProvider } from "./section-context"

const Home = () => {
    return (
        <div className="h-screen w-full">
            <SectionProvider>
                <Header />
                <MainContainer />
            </SectionProvider>
        </div>
    );
};

export default Home;