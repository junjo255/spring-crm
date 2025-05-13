import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './CTA.module.scss';

export default function CTA() {
    return (
        <div className={styles['section']}>
            <div className={styles['container']}>
                <div className={styles['text-center']}>
                    <h2 className={styles['title']}>
                        Ready to transform your workplace?
                    </h2>
                    <p className={styles['subtitle']}>
                        Join thousands of companies using Spring CRM to build high-performing teams that generate sales.
                    </p>
                    <div className={styles['buttons']}>
                        <button className={styles['button-primary']}>
                            Get Started <ArrowRight className={styles['icon']} size={20} />
                        </button>
                        <button className={styles['button-secondary']}>
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}