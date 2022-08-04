import React from 'react'
import Banner from '../../components/Banner/ContactBanner/Banner'
import Card from '../../components/Card/ContactCard/Card'
import Map from '../../components/ContactMap/Map'

const Contacts = () => {
  return (
    <React.Fragment>
      <Banner/>
      <Card/>
      <Map/>
    </React.Fragment>
  )
}

export default Contacts