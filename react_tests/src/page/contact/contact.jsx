import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <section className="order-location" data-aos="fade-up">
            {/* Левая колонка: форма заказа */}
            <div className="order-box">
                <h2 className="box-title">Buyurtma berish</h2>
                <form className="order-form">
                    <input type="text" placeholder="Ism familiya"/>
                    <input type="text" placeholder="Contact"/>
                    <input type="text" placeholder="Qo'shimcha"/>
                    <button type="submit">Yuborish</button>
                </form>
            </div>

            <div className="location-box">
                <h2 className="box-title">Nash lokatsiya</h2>
                {/* Здесь можно вписать адрес, карту или что угодно */}
                <p>Toshkent, Yunusobot, Iftixor 80</p>
                {/* Пример вставки Google Maps */}
                <iframe
                    title="Bizning manzil"
                    src="https://www.google.com/maps/place/87WG%2B6P9,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3455759,69.276822,79m/data=!3m1!1e3!4m6!3m5!1s0x38ae8ca819ff6b49:0x66c60c3048a96696!8m2!3d41.3455076!4d69.2769045!16s%2Fg%2F11lmnrqvx0?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};
export default Contact;