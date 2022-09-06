import React from "react";
const Home = () => {

    const ClickMe = () => {
        console.log("Clicked");
    }

    const ClickMe2 = (name) => {
        console.log("name = "+ name);
    }
    

    return (
        <div className="container">
            <br></br>
            <h3>Home Page</h3>
            <br/>
            <button className="btn btn-primary" type="button" onClick={ClickMe}>Click Me</button>
            <br/>
            <button className="btn btn-danger" type="button" onClick={() => ClickMe2('ahmad')}>Click Me</button>
        </div>
    );
}

export default Home;