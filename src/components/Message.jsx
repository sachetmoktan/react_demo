import { PropTypes } from 'prop-types'

function Message (props) {
    const { userName = "Default_Name", fetchFromChild } = props;
    
    const childrenName = "My name is Message";

    // props.userName = "Rohan"

    return (
        <>
        <p>This is message to {userName}</p>
        <button onClick={() => fetchFromChild(childrenName)}>Pass Props to Parent Component</button>
        </>
    )
}

Message.propTypes = {
    userName: PropTypes.string,
    fetchFromChild: PropTypes.func
}

export default Message;