import React from 'react'
import '../Tag/Tag.scss'
const Tag = (props) => {
    return (
        <div>
            <div className='footer-up'>
                <ul>
                    {props && props.tags[0].split(',').map((e) => {
                        console.log(e);
                        return (
                            <li>
                                {e}
                            </li>
                        )
                    })}
            </ul>
        </div>

        </div >
    )
}

export default Tag