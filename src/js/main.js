/**
 * Created by jeff on 2017/3/20.
 */
var HelloWorld = React.createClass({
    render: () => {
        return (<div className="hello">Hello world3</div>);
    }
});

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));