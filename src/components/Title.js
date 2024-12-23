import React from 'react'

const Title = ( { simple, decorated } ) => {
    return (
        <div class="section-title">
            <h2>{ simple } <span>{ decorated }</span></h2>
        </div>
    )
}

export default Title