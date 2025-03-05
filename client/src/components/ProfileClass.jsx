import {Component} from "react";

class ProfileClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name: 'Jayant Kumar Naik',
                location: 'Bengaluru, Karnataka',
                avatar_url: '',
                company: 'Magicbricks Realty Services Ltd.',
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/jayantknaik");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log('componentDidMount');
    }

    componentDidUpdate () {
        console.log('componentDidUpdate');
    }

    componentWillUnmount () {
        console.log('componentWillUnmount');
    }

    render () {
        const {name, location, avatar_url, company} = this.state.userInfo;
        return (
            <div className="user">
                {
                    avatar_url ? <img className="user__img" src={avatar_url} width={400} height={400} alt="profile-picture" /> : <div className="user__img-dummy"></div>
                }
                <div className="user__head">About Us:</div>
                <div className="user__txt name">{name}</div>
                <div className="user__txt location">{location}</div>
                <div className="user__txt company">{company}</div>
            </div>
        )
    }
}

export default ProfileClass;

/* LIFECYCLE METHODS: 

1. MOUNTING
    1. Constructor (Dummy)
    2. Render (Dummy)
        <HTML Dummy>
    3. componentDidMount
        <API Call>
        <this.setState -> state variables are updated >

2. UPDATING
    1. Render (API Data)
        <HTML API_DATA>
    2. componentDidUpdate */