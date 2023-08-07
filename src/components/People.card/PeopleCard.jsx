import { Link } from "react-router-dom";

const PeopleCard = ({ id, name, known, img }) => {
    return (
        <Link to={`/single-people/${id}`} >
            <div className="card text-white rounded relative mb-5  bg-gray-900">
                <div className="card__img">
                    <img src={img} alt="Card Img" className="rounded-lg" />
                </div>
                <div className="card__content">
                    <h2 className="text-xl font-semibold ">{name}</h2>
                    <span className="text-sm ">{known}</span>

                </div>
            </div>
        </Link >
    );
};

export default PeopleCard;