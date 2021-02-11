import React from 'react'
import PropTypes from 'prop-types'
const Profile = ({fullName , bio , profession , getName , children}) => {
    return (
        
        <div>
            
            <button onClick={() => getName(fullName)}>Click here!</button>
            <h1>{fullName}</h1>
            <h2>{bio} </h2>
            <h2>{profession}</h2>
            {children}
        </div>
    )
}
export default Profile;


Profile.defaultProps ={ 
    fullName: "No Name",
    bio: " No bio availble ",
    profession: "nothing",
}

Profile.propTypes={
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    children : PropTypes.object,
}