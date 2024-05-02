import React from 'react'

import {PriceDetailsProps} from '../../lib/index'

import {ProductCartText} from '../../constants'

function PriceDetails({ locale }: PriceDetailsProps) {
  const t = ProductCartText[locale] || ProductCartText["en"];

  return (
    <section className='PriceDetailsShop'>PriceDetails</section>
  )
}

export default PriceDetails