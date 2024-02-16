

const Transform = ({color, paragraph}) => {
    return (
            <p style={{'color':color}}>{paragraph.toUpperCase()}</p>
    )
}

Transform.defaultProps = {
    color: 'white',
    paragraph: 'Seu texto aqui!'
    
}

export default Transform