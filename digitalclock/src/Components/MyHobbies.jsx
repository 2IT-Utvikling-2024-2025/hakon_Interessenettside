import { useState } from 'react'
import './MyHobbies.css'

const hobbies = [
    { title:"Drawing", IsFavore: true, upVote: 0, id: 1},
    { title:"Gaming", IsFavore: true, upVote: 0, id: 2},
]


export default function MyHobbies() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id} style={ {color: hobby.IsFavorite ? 'magenta ': 'white'   } }>
            {hobby.title}
        </li>
    )

    return (
        <>
           

            <ul>{listItems}</ul>
        </>
    )
}

function VoteButton() {
    const [vote, setVote] = useState(0)

    function handleClick(){
        setVote(vote +1)
    }

    return (
        <button className='button' onClick={handleClick}>
            Voted {vote}
        </button>
    )   
}