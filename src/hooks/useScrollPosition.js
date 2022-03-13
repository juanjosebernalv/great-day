import {useEffect, useState} from 'react';

function useScrollPosition(props) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
}

export default useScrollPosition;