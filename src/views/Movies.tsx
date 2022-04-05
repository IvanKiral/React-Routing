import {useIntl} from "react-intl";
import React, {useEffect, useState} from "react";
import {deliveryClient} from "../utils/client";
import {Link} from "react-router-dom";
import {Movie} from "./Movie";

export const Movies: React.FC = () => {
    const { formatMessage, locale } = useIntl();
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies().then(value => {
            setMovies(value.data.items);
        });
    }, [locale])


    const getMovies = async () => {
        return await deliveryClient.items<Movie>().type("movielanguage").languageParameter(locale).toPromise();
    }

    return (
        <div>
            <h2>{formatMessage({id: "Header.movieLinkTitle"})}</h2>
            <ul>
                {movies.map(val =>
                    <CustomLink key={val.system.codename} movie={val} />
                )}
            </ul>

        </div>
    );
}

interface linkProps{
    movie: Movie
}

const CustomLink: React.FC<linkProps> = ({movie}) => {
    return(
        <><Link to={movie.system.codename}>{movie.elements.title.value}</Link>, <br /></>
    )

}
