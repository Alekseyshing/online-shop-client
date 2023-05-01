/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useStore } from 'effector-react'
import { $boilerPart } from '@/context/boilerPart'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import PartImagesItem from './PartImagesItem'
import PartSlider from './PartSlider'
import styles from '@/styles/part/index.module.scss'

const PartImagesList = () => {
  const boilerPart = useStore($boilerPart)
  const isMobile = useMediaQuery(850)
  const images = boilerPart.images
    ? (JSON.parse(boilerPart.images) as string[])
    : []
  const [currentImageSrc, setCurrentImageSrc] = useState('')

  return (
    <div className={styles.part__images}>
      {isMobile ? (
        <PartSlider images={images} />
      ) : (
        <>
          <div className={styles.part__images__main}>
            <img src={currentImageSrc || images[0]} alt={boilerPart.name} />
          </div>
          <ul className={styles.part__images__list}>
            {images.map((item, index) => (
              <PartImagesItem
                key={index}
                src={item}
                callBack={setCurrentImageSrc}
                alt={`image-${index + 1}`}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default PartImagesList
