interface Assets {
  banner: string
  commonDescription: string
  profile: string
  testimonial: string
  textEditor: string
  contact: string
  welcome: string
  user: string
  claim: string
}

const assets: Assets = {
  banner: '/assets/banner',
  commonDescription: '/assets/common-description/',
  profile: '/assets/profile',
  testimonial: '/assets/testimonial',
  textEditor: '/assets/text-editor',
  contact: '/assets/contact',
  welcome: '/assets/welcome',
  user: '/assets/user',
  claim: '/assets/claim'
}

type AssetsKeys = keyof typeof assets

export const getImageUrl = (assetsType: AssetsKeys, imageSrc: string) => {
  return `${
    import.meta.env.MODE === 'development'
      ? import.meta.env.REACT_APP_DEV_URL.replace('/api', '')
      : import.meta.env.REACT_APP_PROD_URL.replace('/api', '')
  }${assets[assetsType]}/${imageSrc}`
}
