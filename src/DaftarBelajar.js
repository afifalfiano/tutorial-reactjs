
const DaftarBelajar = (props) => {
    const list = props.data.map(item => {
        return (
        <li>{item.topic}</li>
        )
    });
    return (
        <ul>
            {
                // props.data.map(item => {
                //     return (
                //     <li>{item.topic}</li>
                //     )
                // })
                list
            }
        </ul>
    )
}

export default DaftarBelajar;