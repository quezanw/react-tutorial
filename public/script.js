{
    console.log(React);
    console.log(ReactDOM);

    const button = React.createElement('button', null, 'Click Me');
    console.log(JSON.stringify(button));
    ReactDOM.render(button, document.getElementById('app'));
}