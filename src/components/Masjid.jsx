import React from 'react';
import '../css/masjid.css';
import Header from './Header';
const Masjid = () => {
    return (
        <div className='main_div'>
            <Header name="مسجد"/>
            <div className="input_box">
                <div className="search_box">
                    <input type="text" placeholder="انداج کریں" />
                </div>
                <div className="button">
                    تلاش کریں
                </div>
            </div>
            <div className="checkbox">
                <div className="search_category">
                    <input type="checkbox" name="masjid_number" id="" />
                    <label htmlFor="masjid_number">صوبہ کا نام</label>
                </div>
                <div className="search_category">
                    <input type="checkbox" name="masjid_number" id="" />
                    <label htmlFor="masjid_number">شھر کا نام</label>
                </div>
                <div className="search_category">
                    <input type="checkbox" name="masjid_number" id="" />
                    <label htmlFor="masjid_number">نگران کا نام</label>
                </div>
                <div className="search_category">
                    <input type="checkbox" name="masjid_number" id="" />
                    <label htmlFor="masjid_number">مسجد کا نام</label>
                </div>
                <div className="search_category">
                    <input type="checkbox" name="masjid_number" id="" />
                    <label htmlFor="masjid_number">مسجد نمبر</label>
                </div>
            </div>
        </div>
    )
}

export default Masjid
