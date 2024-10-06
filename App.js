

const head = React.createElement('div',{},[React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
        [React.createElement('h1',{},"hai naveen you are in React world"),
            React.createElement('h4',{},"hai naveen you are in React world")]
    )),React.createElement('div',{id:'parent'},
        React.createElement('div',{id:'child'},
            [React.createElement('h1',{},"hai naveen you are in React world"),
                React.createElement('h4',{},"hai naveen you are in React world")]
        ))]
    
)

const root =ReactDOM.createRoot(document.getElementById('root'))

root.render(head)