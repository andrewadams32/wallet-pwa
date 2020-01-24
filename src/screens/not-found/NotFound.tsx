import React from 'react'

const NotFound: React.FC<any> = (props) => {
    console.log('pros', props)
    return (
        <div style={{height: "100%", width: "100%"}}>
            404 not found
        </div>
    )
}

export default NotFound