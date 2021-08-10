import React from "react";
import "../css/masjid.css";
import "../css/MasjidDetail.css";
import Header from "./Header";

const MasjidDetail = () => {
  return (
    <div className="main_div">
    <Header name="اخراجات کی تفصیل"/>
    <div className="masjid_detail">
      <div className="button">خرچ کا اندراج</div>
      <div className="masjid_header_info">
      <p>مسجد نمبر :1</p>
      <h1>ابوبکر صدیق رضی اللہ عنہ</h1>
      <p>علاقہ : ٹندواعظم , سندھ</p>
      <p>نگران : بلال</p>
      </div>
    </div>
    <div className="expense_table">
    <table>
  <thead>
    <tr>
      <th>header1</th>
      <th>header2</th>
      <th>header3</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>text1.1</td>
       <td>text1.2</td>
       <td>text1.3</td>
     </tr>
     <tr>
       <td>text2.1</td>
       <td>text2.2</td>
       <td>text2.3</td>
     </tr>
     <tr>
       <td>text3.1</td>
       <td>text3.2</td>
       <td>text3.3</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>
    </div>
    </div>
  );
};

export default MasjidDetail;
