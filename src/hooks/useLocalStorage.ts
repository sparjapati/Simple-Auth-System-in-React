import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
    key: string,
    initialValue: T | undefined | (() => T | undefined) = undefined
) => {
    const [data, setData] = useState<T | undefined>(() => {
        const jsonString = localStorage.getItem(key);
        if (jsonString === undefined || jsonString === null) {
            if (typeof initialValue === 'function') {
                return (initialValue as () => T | undefined)();
            } else {
                return initialValue;
            }
        } else {
            return JSON.parse(jsonString) as T;
        }
    });

    useEffect(() => {
        if (data === undefined || data === null) {
            localStorage.removeItem(key);
            return;
        }
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    return [data, setData] as const;
};