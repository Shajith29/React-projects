export const Sidebar = ({ handleToggleModal, data }) => {
    return (
        <div className="sidebar">
            <div className="bgoverlay"></div>
            <div className="sidebarContents">
                <h1>{data?.title}</h1>
                <div className="descriptionContainer">
                    <p className="data">{data?.date}</p>
                    <p className="description">{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};
