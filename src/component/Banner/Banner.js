import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="banner-container">
                <div className="carousel-inner">
                    <div className="active">
                        <img className="d-block w-100" src="https://i.ibb.co/D8YgdDp/slide-2.jpg" alt="Safely Team Banner" />
                        <div className="carousel-caption d-sm-none d-md-block ">
                            <h5>KEEP YOUR CAR ON THE ROAD!</h5>
                            <p>OUR MISSION IS TO IMPROVE DRIVER SAFETY ON THE ROAD</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;