import React from 'react';
import workTypes from './work-types.json';

const WorkTypes = () => {
    return (
        <div className='work_types_part'>
            <ul className='type_block'>
                {workTypes.map((work, index) => (
                    <li key={index} className='main_block'>
                        <button className='block_title'>
                            <p>{work.title}</p>
                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.998 10L9.10843 1.89112L0.999549 9.78074" stroke="#070814" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <ul className='block_list'>
                            {work.elements.map((el, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            name='filter'
                                        />
                                        <p>{el.item}</p>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <div className='side_line'></div>
        </div>
    )
}

export default WorkTypes;