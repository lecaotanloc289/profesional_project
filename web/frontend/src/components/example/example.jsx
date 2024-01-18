import React from 'react'
import logo from '../../assets/logo'
import images from '../../assets/images'

function Greating({ name }) {
    return <h1>Hello, {name} </h1>
}

export default function example() {
    return <Greating name='world' />
}

export function Profile() {
    return <img src={logo.twitter} alt='France' />
}

export function Gallery() {
    return (
        <section>
            <h1>Amazing icon </h1>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}

export function TodoList() {
    const today = new Date();
    function formatDay (date) {
        return new Intl.DateTimeFormat(
            'vi', {weekday: 'long'}
        ).format(date)
    }
    return (
        <div>
            <h1>{person.name} To do list {formatDay(today)}</h1>
            <img className='avatar' src={logo.Germany} alt='' />
            <ul style={person.theme}>
                <li>Invent new traffic light</li>
                <li>Reherar a movie scene </li>
                <li>Improve the spect rom </li>
            </ul>
            
        </div>
    )
}

const person = {
    name: 'Le Cao Tan Loc', 
    theme: {
        backgroundColor: 'black',
        color: 'red'
    }
};

// PROPS
export function Avatar ({person, size}) {
    return <img 
        src="https://i.imgur.com/1bX5QH6.jpg" 
        alt={person.name} 
        className='avatar'
        width={size}
        height={size}
    />
}

export function PF () {
    return (
        <Avatar
        person={{name: 'Lin Laying', imageId: "1bx5qh6"}}
        width={300}
        height={300}
    />
    )
    
}

// Conditional render 
function Item ({name, isPacket}) {
    if(isPacket)     return <li className='item'>{name}✔</li>
    else return <li className='item'>{name}</li>
}

export function PackingList () {
    return <section>
        <h1>Le Cao Packing list</h1>
        <ul>
            <Item name='Space suit'isPacket={'true'}/>
            <Item name='Helmet with a golden leaf'/>
            <Item name='Photo of Tam'/>
        </ul>
    </section>
}
