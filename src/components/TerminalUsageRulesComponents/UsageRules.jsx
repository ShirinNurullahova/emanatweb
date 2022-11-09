import React from 'react'
import RulesList from './RulesList';
import person8 from '../../assets/img/person 8 1.png';

const UsageRules = () => {
    return (
        <section className='usage_rules_section'>
            <div className='usage_rules_container'>
                <h1>Ödəniş <span>terminallarının</span> istifadə qaydaları.</h1>
                <RulesList />
            </div>
            <div className='person_image'>
                <img src={person8} alt="" />
            </div>
        </section>
    )
}

export default UsageRules;