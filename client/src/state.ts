import { atom, selector, useRecoilValue } from "recoil";
import { banners } from "../mock/banner";
import { categories } from "../mock/category";

export const userState = atom({
  key: "user",
  default: {
    id: '12345678',
    name: 'Zalo',
    avatar: 'ZA',
  }
});

export const bannerState = selector({
  key: "banner",
  get: () => banners,
});

export const categoryState = selector({
  key: "categories",
  get: () => categories,
});

export const categoryPickState = atom<string>({
  key: "category",
  default: "all"
});

export const displayProductState = selector({
  key: "product",
  get: () => {
    const categories = useRecoilValue(categoryState);
    const pickState = useRecoilValue(categoryPickState);

  } 
})