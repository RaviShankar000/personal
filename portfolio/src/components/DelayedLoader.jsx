import { useState, useEffect } from 'react';
import Loader from './Loader';

const DelayedLoader = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 300); // 300ms delay threshold

        return () => clearTimeout(timer);
    }, []);

    return show ? <Loader loading={true} /> : null;
};

export default DelayedLoader;
