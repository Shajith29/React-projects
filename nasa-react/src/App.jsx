import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const fetchAPI = async () => {
            const NASA_key = "DTfHmxo4S5gj7sftabWJhJmzMRVbRianktSDf7zr";
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_key}`;

            const today = new Date().toDateString();
            const localKey = `NASA-${today}`;
            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData);
                console.log("FETCHED FROM LOCAL STORAGE");
                return;
            }

            localStorage.clear();
            try {
                setLoading(true);
                const data = await fetch(url).then((res) => res.json());
                if (data) {
                    localStorage.setItem(localKey, JSON.stringify(data));
                    console.log("FETCHED FROM API");
                    setData(data);
                    setLoading(false);
                }
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        };

        fetchAPI();
    }, []);
    return (
        <>
            {data ? (
                <Main data={data} />
            ) : (
                <div className="loadingState">
                    <i className="fa-solid fa-gear"></i>
                </div>
            )}
            {showModal && (
                <Sidebar handleToggleModal={handleToggleModal} data={data} />
            )}
            {data && (
                <Footer handleToggleModal={handleToggleModal} data={data} />
            )}
        </>
    );
}

export default App;
