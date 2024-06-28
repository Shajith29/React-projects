export const Footer = ({ handleToggleModal, data }) => {
    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>APOD Project</h1>
            </div>
            <button>
                <i
                    onClick={handleToggleModal}
                    className="fa-solid fa-circle-info"
                ></i>
            </button>
        </footer>
    );
};
