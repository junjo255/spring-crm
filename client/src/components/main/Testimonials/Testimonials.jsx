import React from 'react';
import styles from './Testimonials.module.scss';

const testimonials = [
    {
        quote: "Spring CRM has transformed how we manage performance and develop our talent. It's now an integral part of our culture.",
        author: "Sarah Kim",
        role: "HR Director",
        company: "ABC Tech Inc.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
        quote: "We are now generating 200% sales with Spring CRM real-time conversation suggestions.",
        author: "Tony An",
        role: "CEO",
        company: "Innovation Labs",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    }
];

export default function Testimonials() {
    return (
        <div id="testimonials" className={styles['testimonials-section']}>
            <div className={styles['testimonials-container']}>
                <div className={styles['testimonials-header']}>
                    <h2 className={styles.title}>
                        Trusted by leading companies
                    </h2>
                    <p className={styles.subtitle}>
                        See what our customers have to say about their experience
                    </p>
                </div>

                <div className={styles['testimonials-grid']}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles['testimonial-card']}>
                            <p className={styles.quote}>
                                "{testimonial.quote}"
                            </p>
                            <div className={styles['author-info']}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className={styles['author-image']}
                                />
                                <div className={styles['author-details']}>
                                    <p className={styles.name}>{testimonial.author}</p>
                                    <p className={styles.role}>{testimonial.role}</p>
                                    <p className={styles.company}>{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
