import React from 'react'
import Title from './Title'

import { services } from '../data'

const Services = () => {
    return (
        <section class="section services" id="services">

            <Title simple="our" decorated="services" />

            <div class="section-center services-center">

                {
                    services.map( ( service ) => {
                        const { id, icon, title } = service

                        return (
                            <article key={ id } class="service">
                                <span class="service-icon"><i class={ icon }></i></span>
                                <div class="service-info">
                                    <h4 class="service-title">{ title }</h4>
                                    <p class="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Asperiores, officia.</p>
                                </div>
                            </article>
                        )
                    } )
                }

            </div>
        </section>
    )
}

export default Services