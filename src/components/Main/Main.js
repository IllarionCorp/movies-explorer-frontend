import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

export default function Main() {
    return (
        <main className="main">
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            {/* <AboutMe /> */}
        </main>
    );
}