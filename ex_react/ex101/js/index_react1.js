var d = document;
var msg = '';

function Hello(props) {
    return <h1>안녕!</h1>;
}

const container = document.getElementById('mydiv1');
const root = ReactDOM.createRoot(container);
root.render(<Hello/>);

function fnS1() {
    console.log('aaa');
    alert('aaa');
}