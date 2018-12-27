{
    console.log(React);
    console.log(ReactDOM);

    const button = React.createElement('button', null, 'Click Me');
    console.log(JSON.stringify(button));
    ReactDOM.render(button, document.getElementById('app'));

    let interval = setInterval(() => {
        const date = new Date();
        let hours = Math.floor(date.getUTCHours() / 12);
        let minutes = (date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes());
        let seconds = (date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds());
        let period = (date.getUTCHours() > 12 ? "PM" : "AM");
        let currentTime = `${hours}:${minutes}:${seconds} ${period}`;
        // console.log(time);
        let time = React.createElement('p', null, `The time is: ${currentTime}`);
        ReactDOM.render(time, document.getElementById('app'));
        // document.getElementById("time").innerHTML = time;
    }, 1000);
}