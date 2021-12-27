import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'BootMakers Shop',
  description: 'Vendemos las mejores botas western del Mundo',
  keywords: 'botas, sombreros vaqueros, accesorios vaqueros',
}

export default Meta
