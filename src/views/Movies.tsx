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
            console.log(value.data.items)
            setMovies(value.data.items);
        });
        console.log(movies)
    }, [locale])


    const getMovies = async () => {
        return await deliveryClient.items<Movie>().type("movielanguage").languageParameter(locale).toPromise();
    }

    return (
        <div>
            <h2>{formatMessage({id: "Header.contactsLinkTitle"})}</h2>
            <ul>
                {movies.map(val =>
                    [<Link to={val.system.codename} key={val.elements.title.value}>{val.elements.title.value}</Link>, <br />]
                )}
            </ul>

        </div>
    );
}
