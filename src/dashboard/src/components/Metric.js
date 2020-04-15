import React from 'react';

function Metric(props) {
    console.table(props);
    return (
        <div className="col-md-4 mb-4">
            <div className={`card ${props.border} shadow h-100 py-2`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-m font-weight-bold ${props.textColor} text-uppercase mb-1`} style={{ fontWeight: 'bold' }}>{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-800`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Metric;