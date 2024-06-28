export const Main = ({ data }) => {
    return (
        <div>
            <div className="imageContainer">
                <img className="bgimg" src={data?.hdurl} alt="mars-image" />
            </div>
        </div>
    );
};
