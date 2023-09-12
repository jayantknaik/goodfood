const root = ReactDOM.createRoot(document.getElementById('root'));
const head = React.createElement("h1", {id: 'heading'}, "Hello World from React");
const parent = React.createElement('div', {id: 'parent'}, [React.createElement('div', {id: 'child', key:'child1'}, [React.createElement('h1', {key: 'h1'}, "I'm a h1 tag"), React.createElement('h2', {key: 'h2'}, "I'm a h2 tag") ]), React.createElement('div', {id: 'child', key: 'child2'}, [React.createElement('h1', {key: 'h1'}, "I'm a h1 tag"), React.createElement('h2', {key: 'h2'}, "I'm a h2 tag") ]) ])
console.log(parent);
root.render(parent);