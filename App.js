const parent = React.createElement(
    "div",
    {id:"parent"},React.createElement(
        "div",{id:"child"},
       [ React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"i am an h2 tag")]
    )
);


//Reactelement is an object where brpwser understand
// const heading =  React.createElement("h1",{id:"heading"},"hello world from react");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);//parsing html n put ias ui

    console.log(parent);//object