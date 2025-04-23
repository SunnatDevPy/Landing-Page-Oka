import React from "react";
import ProductCard from "../../components/products/menu.jsx";
import "./menu-page.css";

const Menu = () => {
    return (
        <div className="menu-grid" data-aos="fade-up">
            <ProductCard
                image="/img.png"
                name="Говядина"
                price="65000"
                description="Свежая мякоть без костей"
            />
            <ProductCard
                image="/img.png"
                name="Карейка"
                price="70000"
                description="Нежная часть говядины"
            />
            <ProductCard
                image="/img.png"
                name="Рёбра"
                price="60000"
                description="Идеально для гриля"
            />
            <ProductCard
                image="/img.png"
                name="Говядина"
                price="65000"
                description="Свежая мякоть без костей"
            />
            <ProductCard
                image="/img.png"
                name="Карейка"
                price="70000"
                description="Нежная часть говядины"
            />
            <ProductCard
                image="/img.png"
                name="Рёбра"
                price="60000"
                description="Идеально для гриля"
            />
        </div>
    );
};

export default Menu;
