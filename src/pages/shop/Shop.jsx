import React from 'react'
import Hero from '../../components/hero/Hero'
import Popular from '../../components/popular/Popular'
import Offers from '../../components/offers/Offers'
import Newcollections from '../../components/newcollections/Newcollections'
import Newsletter from '../../components/newsletter/Newsletter'

export const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Newsletter/> 
    </>
  )
}
