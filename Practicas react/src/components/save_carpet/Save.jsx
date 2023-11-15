import { useEffect, useState } from "react";
import axios from "axios"
import UserShow from "../userUnic/user";

const SaveUser = () => {
    const [ input, setInput ] = useState({
        name:'',
        lastName:'',
        iN:''
    })

    const [dataUser , setDataUser ] = useState([])

    const insertData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/user/showall")
            setDataUser([
                ...response.data
            ])
        } catch (error) {
            console.log("algo salio mal ")
        }
    }

    console.log(dataUser);

    const handlerChange = (event) => {
        const name =  event.target.name
        const value = event.target.value

        setInput({
            ...input,
            [name]:value
        })
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            await axios.post("http://localhost:3001/user/save", input)
            window.alert("User save")
        } catch (error) {
            window.alert(error.message)
            console.log(error.message);
        }
    }

    useEffect(() => {
        insertData()
    }, [handleSubmit()])


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                 type="text"
                 placeholder="User name"
                 name="name"
                 value={input.name}
                 onChange={handlerChange}
                 />

                <label>Last Name</label>
                <input
                type="text"
                placeholder="User Last name"
                name="lastName"
                value={input.lastName}  
                onChange={handlerChange}

                  />

                <label>Identification Number</label>
                <input
                type="number"
                placeholder="number ID"
                name="iN"
                value={input.iN}
                onChange={handlerChange}

                />

                <button>
                    Submit
                </button>
            </form>
           
            <div>
                {dataUser.map((user) => ( 
                    <div key={user.id}>
                        <UserShow
                            id={user.id}
                            name={user.name}
                            lastName={user.lastName}
                            iN={user.iN}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SaveUser;