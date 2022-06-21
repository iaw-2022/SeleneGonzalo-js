import 'tw-elements';
import {useState, useEffect} from 'react'

function QualificationCard (props){
    const [user, setUser] = useState([]);
    const qualification = props.qualification;
    const index = props.index;

    useEffect(() => {
        getUser()
    }, []);

    function getUser(){
        fetch('https://api-recetaccs.herokuapp.com/users/'+qualification.id_user, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(res => res.ok ? res.json() : null)
        .then(
            (data) => {
                if(data !== null){
                    setUser(data)
                }
            },
        )
    }

    return(
        <div className={"carousel-item relative float-left w-full text-center ".concat(index === 0? "active": "")}>
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                {qualification.commentary}
            </p>
            <div className="mt-12 mb-6 flex justify-center">
                {console.log(user.image)}
                <img src={user.image} className="rounded-full w-24 h-24 shadow-lg" alt="smaple image"
                />
            </div>
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                {qualification.qualification}
            </p>
            <p className="text-gray-500"> {user.name} </p>
        </div>
    )
}

export default QualificationCard