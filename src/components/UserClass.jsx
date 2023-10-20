import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    render () {

        const {name} = this.props;
        const {count} = this.state;

        return (
            <div className="user-class">
                <h1>{count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Counter</button>
                <div className="user-class__name">{this.props.name}</div>
            </div>
        )
    }
}

export default UserClass;