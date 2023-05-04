import React from "react"
import Image from "./Image"
import PropTypes from "prop-types";

class UserProfile extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <p> {user.name} </p>
                <p> {user.email} </p>
                <Image source={user.avatar} alternativeText="User avatar" />
            </div>
        );
    }
}

UserProfile.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,

};

export default UserProfile;