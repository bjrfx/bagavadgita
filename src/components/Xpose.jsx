import React, { Component } from "react";

class Xpose extends Component {
    constructor() {
        super()
        this.state = {
            xposedData: {},
            userEmail: "", // Initialize userEmail state to store the email input
            error: ""
        }
    }
    
    async componentDidMount() {
        // Fetch data when component mounts using userEmail from state
        await this.fetchData();
    }

    // Function to fetch data based on userEmail
    async fetchData() {
        const { userEmail } = this.state;

        if(userEmail.trim() !== "") { // Check if userEmail is not empty
            await fetch(`https://api.xposedornot.com/v1/check-email/${userEmail}`)
                .then((response) => response.json())
                .then((exploitData) => this.setState({ xposedData: exploitData }));
        }
    }

    render() {
        //Invalid or not found email
       // console.log("Xposed Data:", this.state.xposedData.Error);
        
        const { breaches, email } = this.state.xposedData;
        
        return (
            <div>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="johndoe@email.com" 
                    value={this.state.userEmail} // Bind input value to userEmail state
                    onChange={(event) => {
                        this.setState({ userEmail: event.target.value });
                    }}
                />
                <button onClick={this.fetchData.bind(this)}>Get data</button>
                <h3>Email: {email}</h3>
                <h4>Breaches: </h4>
                <ul>
                    {breaches && breaches[0] && breaches[0].map((breach, index) => (
                        <li key={index}>{breach}</li>
                    ))}
                </ul>
               
            </div>
        )
    }
}

export default Xpose;
