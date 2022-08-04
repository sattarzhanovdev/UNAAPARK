import React from 'react'
import Contract from '../../components/Card/ContrCard'
import FAQCard from '../../components/Card/FAQCard'
import HTUCard from '../../components/Card/HTUCard/HTUCard'

const FAQ = () => {

  return (
    <React.Fragment>
      <FAQCard />
      <Contract/>
      <HTUCard/>
    </React.Fragment>
  )
  
}

export default FAQ