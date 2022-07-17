class Slots extends React.Component {
    render() {
        const {s1,s2,s3} = this.props
        const winner = (s1===s2)&&(s2===s3)
        
        return (
            <div className="Slot">
                <p style={{fontSize:"50px", color:'blue'}}>{s1}{s2}{s3}</p>
                <p className={winner?"win":"lose"}>
                    {winner?'Winn':'looose'}</p>
            </div>
        )
    }
}