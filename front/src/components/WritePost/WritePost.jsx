import React, { useState } from 'react';
import axios from 'axios';

import './styles.css';

function WiretPost(params) {
    const [errorMsg, setError] = useState("");
    const [currentUser, setCurrent] = useState(params.user);

    function handleClick(localUser, text) {
        if (text.length === 0)
            setError("Write something")
        else {
            axios.post(`${process.env.REACT_APP_BASE_URL}/addPost`,
                { user: localUser, text },
                { headers: { "Authorization": `Bearer ${localUser.token}` } }
            )
                .then(res => {
                    setError("Successfully commented")

                    document.getElementsByName("comment")[0].value = "";
                    localUser.posts = res.data.posts

                    params.setUser({...localUser})
                    setCurrent(localUser)


                    console.log(currentUser)
                }).catch(err => console.log(err))
        }
    }



    return (
        <div className="WritePost">
            <p>Child {params.user.posts.length}</p>

            {console.log("Child " + currentUser.posts.length)}
            {/* {console.log("Meu user")}
            {console.log(user)} */}
            <form  >
                <textarea className="writeForm" name="comment"
                    placeholder="Your text" autoComplete="off"></textarea>
            </form>
            <button onClick={() => handleClick(currentUser, document.getElementsByName("comment")[0].value,)}>Send</button>
            <p className="errorText">{errorMsg}</p>
        </div>
    );
}

export default WiretPost;
