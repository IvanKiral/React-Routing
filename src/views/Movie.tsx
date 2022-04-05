import React, {useEffect, useState} from "react";
import {useIntl} from "react-intl";
import {useParams} from "react-router-dom";
import {deliveryClient} from "../utils/client";
import {Elements, IContentItem} from "@kentico/kontent-delivery";

export type Movie = IContentItem<{
    title: Elements.TextElement;
    description: Elements.TextElement;
}>;

export const Movie: React.FC = () => {
    const [movie, setMovie] = useState<Movie|undefined>();
    const { locale } = useIntl();
    const { codename } = useParams();

    useEffect(() => {
        getMovie().then(val => {
            setMovie(val?.data.item)
        })
    }, [codename, locale])

    const getMovie = async () => {
        if (codename === undefined){
            return
        }
        return await deliveryClient.item<Movie>(codename).languageParameter(locale).toPromise();
    }

    return(
        <div>
            <p>{movie?.elements.title.value}</p>
            <p>{movie?.elements.description.value}</p>
        </div>
    )
}
