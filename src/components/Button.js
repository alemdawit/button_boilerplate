import React from 'react'
import './index.css'
class Button extends React.Component{
    render(){
        return(
            <div className="data">
                <div>
                    <button>Button One</button>
                </div>
                <div>
                    <button>Button two</button>
                </div>
            </div>
        )
    }
}
export default Button;