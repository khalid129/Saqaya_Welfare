import React from 'react';
import '../css/masjid.css';

const Header = (props) => {
    return (
        <div className='header_div'>
        <div className="date">
            <h3>15-July-2021</h3>
        </div>
        <div className="category_name">
            <h1>{props.name}</h1>
        </div>
        <div className="welfare_name">
            <h3>سقایہ ویلفیئر ٹرسٹ سوسائٹی</h3>
        </div>
    </div>
    )
}

export default Header
