import React, { useEffect } from 'react';
import '../components/TerminalUsageRulesComponents/TerminalUsageRules.scss';
const UsageRules = React.lazy(() => import('../components/TerminalUsageRulesComponents/UsageRules')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const TerminalUsageRulesPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5'
    }, [])

    return (
        <div>
            <UsageRules />
            <Tag tags={['#interfeys,#ödəmə,#xidmət,#vaxt,#ödəmə,#xeyriyyə']}/>
        </div>
    )
}

export default TerminalUsageRulesPage;