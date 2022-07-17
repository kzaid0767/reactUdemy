class Hello extends React.Component {
    render () {
        const props=this.props
        return (
            <div>
                <p><h1>Hello There {props.to} from {props.from} who picture is below</h1></p>
                <img src={this.props.img}/>
            </div>
        )
    }
}

