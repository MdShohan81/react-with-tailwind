import React from 'react';

const Link = (props) => {
    const {name, link} = props.route;
    return (
        <li className='mr-16 md:mt-2 '>
            <a className='text-lg' href={link}>{name}</a>
        </li>
    );
};

export default Link;