interface Assets {
  banner: string;
  commonDescription: string;
  profile: string;
  testimonial: string;
  textEditor: string;
  contact: string;
  welcome: string;
  user: string;
  claim: string;
}

const assets: Assets = {
  banner: "/assets/banner",
  commonDescription: "/assets/common-description/",
  profile: "/assets/profile",
  testimonial: "/assets/testimonial",
  textEditor: "/assets/text-editor",
  contact: "/assets/contact",
  welcome: "/assets/welcome",
  user: "/assets/user",
  claim: "/assets/claim",
};

type AssetsKeys = keyof typeof assets;

export const getImageUrl = (assetsType: AssetsKeys, imageSrc: string) => {
  return `${
    process.env.MODE === "development"
      ? process.env.NEXT_PUBLIC_DEV_URL?.replace("/api", "")
      : process.env.NEXT_PUBLIC_PROD_URL?.replace("/api", "")
  }${assets[assetsType]}/${imageSrc}`;
};
