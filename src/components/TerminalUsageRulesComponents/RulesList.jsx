import React from 'react';
import rulesData from './usage-rules.json';

const RulesList = () => {
  return (
    <div className="rules_list">
        {rulesData.map((rule, index) => (
            <div key={index} className="rules_list__item">
                <p><span>{rule.id}</span> {rule.text}</p>
            </div>
        ))}
    </div>
  )
}

export default RulesList;