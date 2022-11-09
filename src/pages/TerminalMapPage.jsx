import React, { useEffect } from 'react';
import '../components/TerminalMapComponents/TerminalMap.scss';
const TerminalMap = React.lazy(() => import('../components/TerminalMapComponents/TerminalMap')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const TerminalMapPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5'
    }, [])

    return (
        <div>
            <TerminalMap />
            <Tag tags={['#interfeys,#ödəmə,#xidmət,#vaxt,#ödəmə,#xeyriyyə']}/>
        </div>
    )
}

export default TerminalMapPage;