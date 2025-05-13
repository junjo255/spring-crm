import React from 'react';
import { Target, MessageSquare, BarChart, Users } from 'lucide-react';
import styles from './Features.module.scss';

const features = [
    {
        icon: <Target className={styles.icon} />,
        title: 'AI-Powered Lead Conversion Indicator',
        description: 'Our cutting-edge lead indicator evaluates potential customers based on ' +
            'their engagement patterns and other key metrics. This data-driven approach empowers ' +
            'your team to focus on leads that are most likely to convert, boosting your sales ' +
            'efficiency and outcomes.'
    },
    {
        icon: <MessageSquare className={styles.icon} />,
        title: 'Real-Time Conversation Suggestions',
        description: 'Our CRM’s built-in AI model provides real-time suggestions during your ' +
            'conversations. Based on the lead’s profile and behavior, these tailored prompts ' +
            'help you confidently steer discussions and close deals like a pro.'
    },
    {
        icon: <BarChart className={styles.icon} />,
        title: 'Intuitive Lead Tracking',
        description: 'Simplify your lead management process. Track, categorize, ' +
            'and organize potential customers effortlessly, ensuring no opportunity slips through the cracks.'
    },
    {
        icon: <Users className={styles.icon} />,
        title: 'Sales Insights Dashboard',
        description: 'Make data-driven decisions with our comprehensive sales insights dashboard. Get a detailed view of your sales pipeline, team performance, and lead engagement in one place.'
    }
];

export default function Features() {
    return (
        <div id="features" className={styles['section']}>
            <div className={styles['container']}>
                <div className={styles['text-center']}>
                    <h2 className={styles['title']}>
                        A CRM That Drives Sales Like Never Before
                    </h2>
                    <p className={styles['subtitle']}>
                        Unlike traditional CRM tools that merely track your leads, our solution takes it further.
                        With an advanced AI-powered lead indicator, our CRM analyzes the likelihood of a lead
                        converting into a paying customer. This unique feature ensures your team prioritizes
                        high-value opportunities, saving time and maximizing results.
                    </p>
                </div>

                <div className={styles['grid']}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles['feature-card']}>
                            <div className={styles['iconWrapper']}>{feature.icon}</div>
                            <h3 className={styles['feature-title']}>{feature.title}</h3>
                            <p className={styles['feature-description']}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}