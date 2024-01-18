import React from "react";
import NavigationMenu from "../components/Navigation/Navigation_menu";
import Skillset from "../components/Skills/Skillset";
import Carousel from "../components/carousel/carousel";
import MyButton from "../components/Buttons/button";
import Button_bootstrap from "../components/Buttons/Button_bootstrap";
import Carousel_Bootstrap from "../components/carousel/Carousel_Bootstrap/Carousel_Bootstrap";

function Homepage() {
    return (
        <div>
            <header id="Navigation">
                {
                    <NavigationMenu/>
                }
            </header>
            <section id="section1">
                <h2>Tlačítko</h2>
                {
                    <MyButton/>
                }
            </section>
            <section id="section2">
                <h2>Dovednosti</h2>
                {
                    <Skillset/>
                }
            </section>
            <section id="section3">
                <h2>Prohlížení fotek</h2>
                {
                    <Carousel/>
                }
            </section>
        </div>
    );
}
export default Homepage;
