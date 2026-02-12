
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const LoadingContext = createContext({
    isLoading: true,
    startLoading: () => { },
    stopLoading: () => { },
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
    // Initially true to show loader immediately on first render (critical for app boot)
    const [isLoading, setIsLoading] = useState(true);
    const loadingCount = useRef(0);
    const timerRef = useRef(null);

    const startLoading = useCallback(() => {
        loadingCount.current += 1;

        // Only set loading to true if it's the first active request and wasn't already loading
        if (loadingCount.current === 1) {
            // Clear any existing timer to stop hiding
            if (timerRef.current) clearTimeout(timerRef.current);

            // Delay showing loader by 300ms prevents flashing on fast actions
            timerRef.current = setTimeout(() => {
                setIsLoading(true);
            }, 300);
        }
    }, []);

    const stopLoading = useCallback(() => {
        loadingCount.current = Math.max(0, loadingCount.current - 1);

        // If all requests completed
        if (loadingCount.current === 0) {
            // Clear the "show loader" timer if content loaded faster than 300ms
            if (timerRef.current) clearTimeout(timerRef.current);

            // Immediately hide loader
            setIsLoading(false);
        }
    }, []);

    // initial load effect: simulate startup delay then hide
    useEffect(() => {
        // Initial load: show immediately without delay
        setIsLoading(true);
        loadingCount.current = 1;

        // Simulate app boot time (fonts, images, js bundles)
        const timeout = setTimeout(() => {
            stopLoading(); // Decrement initial count
        }, 2000); // reduced from 2500ms for better UX

        return () => clearTimeout(timeout);
    }, [stopLoading]);

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
