import React from 'react'

const Categories = () => {
    return (
        <>
            <h3>
                Categories
            </h3>

            <div className="card-group">
                <div className="card">
                    <img src="./images/cat_mobile.png" className="card-img-top card-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/cat_laptop.jpg" className="card-img-top card-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/cat_accessories.jpg" className="card-img-top card-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/cat_console.jpg" className="card-img-top card-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Categories