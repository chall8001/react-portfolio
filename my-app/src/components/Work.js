import React from 'react'



class Work extends React.Component {
    render() {
        console.log(this.props)
        var user = {
            name: "anna",
            hobbies: ["sports"]
        }
        return(
            <>
                <h1>Here's a test</h1>
            </>

        )
    }
}

export default Work 