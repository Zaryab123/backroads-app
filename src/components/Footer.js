import React from 'react'

import { PageLinks, SocialLinks } from '../data.js';

const Footer = () => {
    return (
        <footer class="section footer">
            <ul class="footer-links">

                {
                    PageLinks.map( ( link ) => {
                        return <li key={ link.id }>
                            <a href={ link.href } class="footer-link">{ link.text }</a>
                        </li>
                    } )
                }
            </ul>
            <ul class="footer-icons">
                {
                    SocialLinks.map( ( link ) => {

                        let { id, href, icon } = link;

                        return (
                            <li key={ id }>
                                <a href={ href } target="_blank" rel="noreferrer" class="footer-icon"
                                ><i class={ icon }></i
                                ></a>
                            </li>
                        )
                    } )
                }
            </ul>
            <p class="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer