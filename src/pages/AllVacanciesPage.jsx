import React, { useEffect } from 'react';
import '../components/AllVacanciesComponents/AllVacancies.scss';
const JoinTeam = React.lazy(() => import('../components/AllVacanciesComponents/JoinTeam')); // Lazy-loaded
const MainDescVacancies = React.lazy(() => import('../components/AllVacanciesComponents/MainDescVacancies')); // Lazy-loaded
const VacanciesList = React.lazy(() => import('../components/AllVacanciesComponents/VacanciesList')); // Lazy-loaded
const WorkTypes = React.lazy(() => import('../components/AllVacanciesComponents/WorkTypes')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const AllVacanciesPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])

  return (
    <div className='all_vacancies'>
      <MainDescVacancies />
      <section className='vacancies_container'>
        <WorkTypes />
        <VacanciesList />
      </section>
      <JoinTeam />
      <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali,#terminal']}/>
    </div>
  )
}

export default AllVacanciesPage;