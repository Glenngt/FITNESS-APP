import React from 'react';
import FitNavbar from './FitNavbar';

const FitHome = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://wallpaperswide.com/download/motivation_fitness_workout_dark-wallpaper-2048x1152.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    const blurredBackgroundStyle = {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '50px',
        width: '80%',
        borderRadius: '20px', 
        margin: '0 auto', 
    };

    return (
        <div style={backgroundStyle}>
            <FitNavbar />
            <div style={{ paddingTop: '150px', textAlign: 'left', color: 'white' }}>
                <div style={blurredBackgroundStyle}>
                    <h1>Welcome to Flex-Fit</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim repudiandae consectetur perspiciatis mollitia modi itaque perferendis quasi repellat illo est consequatur minima, aperiam id ducimus, eos corrupti suscipit saepe.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit quia! Odit sed perferendis quo enim ipsum laboriosam incidunt, omnis nihil ad, quia alias, vero quis similique hic sit magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, nisi doloribus quaerat omnis perferendis ipsum. Modi id rerum sed porro labore, facere commodi nemo distinctio illum est quos, mollitia sunt?
                    </p>
                    <a href="/register" class="btn btn-primary">Join Now</a>
                </div>
            </div>
        </div>
    );
};

export default FitHome;
