import { ReactComponent as Arrow } from "Assets/img/arrow.svg"

function Pagination() {

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <Arrow className="dsmovie-flip-horizontal"/>
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <Arrow />
                </button>
            </div>
        </div>
    );
}
export default Pagination;
