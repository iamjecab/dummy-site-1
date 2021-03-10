import Learning from "./Components/Learning";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Hero from "./Hero";
import Main from "./Main";
import Sponsors from "./Sponsors/index";

function App() {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <Hero></Hero>
            <Main></Main>
            <Learning></Learning>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </>
    );
}

export default App;
