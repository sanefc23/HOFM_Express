// import React from 'react';
import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Header'
import Metric from './components/Metric'
import Footer from './components/Footer'

let data = [{
  title: 'Cantidad de Albums',
  border: 'border-left-primary',
  textColor: 'text-primary',
  value: 238,
  icon: 'fa-clipboard-list',
},
{
  title: 'Amount in products',
  border: 'border-left-success',
  textColor: 'text-success',
  value: 546456,
  icon: 'fa-dollar-sign',
},
{
  title: 'Users quantity',
  border: 'border-left-danger',
  textColor: 'text-danger',
  value: 38,
  icon: 'fa-user-check',
},

];

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalUsers: '-',
      totalProducts: '-',
    }
  }

  componentDidMount() {

    fetch('http://localhost:3030/api/users')
      .then(response => response.json())
      .then(users => {
        fetch('http://localhost:3030/api/products')
          .then(response => response.json())
          .then(products => {
            this.setState({
              totalAlbums: products.total_albums,
              totalUsers: users.total_users
            });
          })
      })
      .catch(e => console.log(e)
      );
  }

  render() {
    let { totalAlbums, totalUsers } = this.state;
    return (
      <div id="wrapper">

        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column" style={{ backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover' }}>

          <div id="content">

            <Navbar />

            <div className="container-fluid">

              <div className="row">
                {data.map(function (unDato, i) {
                  return (
                    < Metric
                      title={unDato.title}
                      value={unDato.value}
                      textColor={unDato.textColor}
                      icon={unDato.icon}
                      border={unDato.border} />
                  );
                })}
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src="assets/images/product_dummy.svg" alt="image dummy" />
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                      <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 01
												</div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 02
												</div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 03
												</div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 04
												</div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 05
												</div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <div className="card bg-info text-white shadow">
                            <div className="card-body">
                              Category 06
												</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />

        </div>

      </div >
    );
  }
}

export default App;
