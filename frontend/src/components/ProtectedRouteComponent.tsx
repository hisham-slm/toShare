import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    element: React.ComponentType<{data : any}>;
    apiRoute: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Element, apiRoute: APIRoute }) => {
    const [resultData, setResultData] = useState<any>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); 

    async function fetchAPI() {
        try {
            const response = await fetch(APIRoute, {
                method: "GET",
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error(`API returned the status with ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error during authentication:", error);
            return null;
        }
    }

    useEffect(() => {
        fetchAPI().then((data) => {
            if (data && typeof data.isAuthenticated === "boolean") {
                setIsAuthenticated(data.isAuthenticated);
                setResultData(data)
            } else {
                setIsAuthenticated(false); 
            }
        });
    }, [APIRoute]);
    console.log(resultData)

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isAuthenticated ? (<Element data={resultData} />) : (<Navigate to="/login" />)}
        </>
    );
};

export default ProtectedRoute;
