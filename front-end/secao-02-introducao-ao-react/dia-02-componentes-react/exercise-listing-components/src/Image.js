import React from "react"

class Image extends React.Component {
    render() {
        const { source, alternativeText } = this.props;
        return <img srv={source} alt={alternativeText} />;
    }
}

export default Image;