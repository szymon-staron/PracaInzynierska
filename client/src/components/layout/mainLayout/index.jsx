import React from 'react';
import { Footer, TopBar } from '../index';

export const MainLayout = (props) => {
    return (
        <section className="mainLayout">
            <TopBar />
            {props.children}

            <Footer />
        </section>
    );
};
