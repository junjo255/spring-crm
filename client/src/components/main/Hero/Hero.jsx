import React from 'react';
import {ArrowRight} from 'lucide-react';
import styles from './Hero.module.scss';
import bannerImg from "../../../assets/banner_image.png";

export default function Hero() {
    return (
        <div className="bg-black/50 relative z-0">
            <div
                className="relative overflow-hidden bg-cover bg-top bg-no-repeat h-[100vh] max-h-[800px] mx-auto"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                    // maxWidth: "2550px",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.8
                }}
            >
                <div className={styles.container}>
                    <div className={styles['hero-grid']}>
                        <div>
                            <h1 className={styles['hero-title']}>
                                Transform Your Sales with the CRM Built by Sales Experts
                            </h1>
                            <p className={styles['hero-subtitle']}>
                                Discover a CRM designed to boost your revenue by combining powerful lead tracking with
                                AI-driven sales insights.
                            </p>
                            <div className={styles['hero-buttons']}>
                                <button className={styles['hero-button']}>
                                    Request Demo <ArrowRight className={styles.icon} size={20}/>
                                </button>
                                <button className={styles['hero-button-secondary']}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            {/* IMAGE HERE */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
