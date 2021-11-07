

const Belajar = props => {
    const {title, dataProps, description} = props

    return (
        <div>
            <h3>Mari Belajar React</h3>
            <ul>
                <li>Tentang React</li>
                <li>Component and Props</li>
                <li>{dataProps[0]}</li>
                <li>{dataProps[1]}</li>
                <li>{dataProps[2]}</li>
            </ul>
        </div>
    )
}

export default Belajar;