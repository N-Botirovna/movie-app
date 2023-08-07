import { Link } from "react-router-dom";

const TvCard = ({ id, title, img, rating, date }) => {
    return (
        <Link to={`/single-tv/${id}`} >
            <div className="card text-white rounded relative mb-5  bg-gray-900">
                <div className="card__img">
                    <img src={img} alt="Card Img" className="rounded-lg" />
                </div>
                <div className="card__content">
                    <h2 className="text-xl font-semibold ">{title}</h2>
                    <span className="text-sm ">{date}</span>
                    <span className="text-sm absolute  top-0 left-0 transform translate-x-1 translate-y-1">
                        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                            <div className="border-b-4 border-l-4 border-dotted border-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
                                <span className="text-yellow-800 font-bold text-lg">{rating}</span>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default TvCard;