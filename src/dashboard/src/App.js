import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Header'
import Metric from './components/Metric'

let data = [{
  title: 'Products in Data Base',
  border: 'border-left-primary',
  textColor: 'text-primary',
  value: 135,
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
  border: 'border-left-warning',
  textColor: 'text-warning',
  value: 38,
  icon: 'fa-user-check',
},

]

function App() {
  return (
    <div id="wrapper">

      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

          <Navbar />

          <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

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

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Dashboard 2020</span>
            </div>
          </div>
        </footer>

          </div>

        </div>
  );
}

export default App;
