import { useEffect, useRef, useState } from "react";

export const useFetch = (url, _body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const body = useRef(_body);
    
    useEffect(() => {        
        const controller = new AbortController();
            const fetchData = async () => {
                setLoading(true);
                try {
                const response = await fetch(url, {signal: controller.signal});
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const result = await response.json();
                setLoading(false);
                setData(result);
                setError(null);
                console.log(body);                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }       
            };
            fetchData();        
            return () => {
                controller.abort(); // Cleanup function to abort the fetch request
            };
    }, [url, body]);
  return {data, loading, error};
}
