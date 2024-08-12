import React from 'react';
import '../web/Dash.css';

const Dash = () => {
  return (
    <ul id="slide-out" className="side-nav fixed z-depth-2">
      <li className="center no-padding">
        <div className="indigo darken-2 white-text" style={{ height: '180px' }}>
          <div className="row">
            <img
              style={{ marginTop: '5%' }}
              width="100"
              height="100"
              src="https://res.cloudinary.com/dacg0wegv/image/upload/t_media_lib_thumb/v1463990208/photo_dkkrxc.png"
              className="circle responsive-img"
              alt="Profile"
            />
            <p style={{ marginTop: '-13%' }}>Tirth Patel</p>
          </div>
        </div>
      </li>
      <li id="dash_dashboard">
        <a className="waves-effect" href="#!"><b>Dashboard</b></a>
      </li>
      <ul className="collapsible" data-collapsible="accordion">
        <li id="dash_users">
          <div id="dash_users_header" className="collapsible-header waves-effect"><b>Users</b></div>
          <div id="dash_users_body" className="collapsible-body">
            <ul>
              <li id="users_seller">
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Seller</a>
              </li>
              <li id="users_customer">
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Customer</a>
              </li>
            </ul>
          </div>
        </li>
        <li id="dash_products">
          <div id="dash_products_header" className="collapsible-header waves-effect"><b>Products</b></div>
          <div id="dash_products_body" className="collapsible-body">
            <ul>
              <li id="products_product">
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Products</a>
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Orders</a>
              </li>
            </ul>
          </div>
        </li>
        <li id="dash_categories">
          <div id="dash_categories_header" className="collapsible-header waves-effect"><b>Categories</b></div>
          <div id="dash_categories_body" className="collapsible-body">
            <ul>
              <li id="categories_category">
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Category</a>
              </li>
              <li id="categories_sub_category">
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Sub Category</a>
              </li>
            </ul>
          </div>
        </li>
        <li id="dash_brands">
          <div id="dash_brands_header" className="collapsible-header waves-effect"><b>Brands</b></div>
          <div id="dash_brands_body" className="collapsible-body">
            <ul>
              <li id="brands_brand">
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Brand</a>
              </li>
              <li id="brands_sub_brand">
                <a className="waves-effect" style={{ textDecoration: 'none' }} href="#!">Sub Brand</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </ul>
  );
};

export default Dash;
