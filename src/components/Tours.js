import React from 'react'
import Title from './Title'

import { toursData } from '../data'

const Tours = () => {
    return (
        <section class="section" id="tours">
            <Title simple="our" decorated="tours" />

            <div class="section-center featured-center">

                {
                    toursData.map( ( tour ) => {

                        const { id, image, date, title, description, location, days, price } = tour;

                        return (
                            <article key={ id } class="tour-card">
                                <div class="tour-img-container">
                                    <img src={ image } class="tour-img" alt="" />
                                    <p class="tour-date">{ date }</p>
                                </div>
                                <div class="tour-info">
                                    <div class="tour-title">
                                        <h4>{ title }</h4>
                                    </div>
                                    <p>
                                        { description }
                                    </p>
                                    <div class="tour-footer">
                                        <p>
                                            <span><i class="fas fa-map"></i></span> { location }
                                        </p>
                                        <p>{ days }</p>
                                        <p>{ price }</p>
                                    </div>
                                </div>
                            </article>
                        )
                    } )
                }

            </div>
        </section>
    )
}

export default Tours