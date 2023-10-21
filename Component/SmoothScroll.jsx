"use client"
import { useEffect } from 'react';

const SmoothScroll = () => {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            e.preventDefault();

            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach((link) => {
            link.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return null;
};

export default SmoothScroll;
