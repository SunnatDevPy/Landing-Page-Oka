import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <div className="header" data-aos="fade-up">
            <div className="center_order">
                <p>Buyurtma berish</p>
            </div>
            <div className="forms">
                <input type="text" placeholder="Ism familiya"/>
                <input type="text" placeholder="Contac"/>
                <input type="text" placeholder="Qo'shimcha"/>
                <button>Yuborish</button>
            </div>
        </div>
    );
};
export default Contact;