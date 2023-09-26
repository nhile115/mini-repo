import { IInitState } from "@/app/common/interfaces";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IFilterProps } from "../interfaces";

interface IState extends IInitState {
    data?:string[];
    totalCount:number;
}
interface IActions {
    getPhoto:(filter:IFilterProps)=>void;
}
const imageNames = [
    "sunset-beach", "forest-path", "mountain-lake", "city-lights", "desert-cactus",
    "autumn-woods", "tropical-paradise", "snow-capped-mountain", "ocean-sunset",
    "urban-skyline", "tranquil-sea", "countryside-sunrise", "starry-night",
    "snowy-forest", "summer-meadow", "dramatic-canyon", "waterfall-jungle",
    "cloudy-mountain", "peaceful-lake", "snowy-peaks", "spring-blossoms",
    "rural-landscape", "vibrant-sunset", "misty-forest", "beach-sunrise",
    "moonlit-ocean", "colorful-autumn", "vibrant-city", "serene-lake", "rocky-shore",
    "snowy-woods", "tranquil-beach", "wildflower-field", "cityscape-sunset",
    "picturesque-mountain", "aurora-borealis", "coastal-cliffs", "sunny-meadow",
    "urban-night", "foggy-valley", "moonlit-forest", "vibrant-woods", "desert-sunset",
    "autumn-mountain", "seaside-village", "misty-lake", "starry-sky", "snowy-hills",
    "colorful-sunset", "beautiful-waterfall", "dramatic-sky", "tranquil-woods",
    "mountain-ridge", "misty-mountain", "moonlit-meadow", "coastal-sunset", "sunflower-field",
    "vibrant-harbor", "starlit-night", "autumn-leaves", "tranquil-stream", "snow-covered-forest",
    "scenic-coastline", "city-lights-reflection", "majestic-mountain", "misty-meadow",
    "colorful-reef", "peaceful-river", "moonrise", "serene-beach", "fiery-sunset",
    "forest-creek", "tranquil-woods-pond", "northern-lights", "desert-canyon", "urban-sunset",
    "snow-covered-peaks", "vibrant-flowers", "coastal-village", "foggy-mountain",
    "cityscape-reflection", "colorful-foliage", "mountain-mist", "tranquil-sea-beach", "snowy-valley",
    "sunny-autumn", "dramatic-seascape", "misty-mountain-lake", "vibrant-waterfall", "snowy-cabin",
    "autumn-path", "coastal-rocky-beach", "moonlit-beach", "colorful-landscape", "serene-forest-stream",
    "urban-architecture", "fiery-sky", "misty-mountain-ridge", "snowy-village", "blossoming-cherry-trees"
];
const usePhotoState = create<IState & IActions>()(
  devtools(
    (set => ({
    totalCount:0,
    getPhoto: (filter) => {
        const startIndex = (filter.page - 1) * filter.limit;
        const endIndex = startIndex + filter.limit;
      const filteredImages = imageNames
          .filter(imageName => imageName.toLowerCase().includes(filter.q.toLowerCase()))
          .slice(startIndex, endIndex)
        set({ data: filteredImages, totalCount:imageNames.length}, false, 'usePhotoState/getPhoto')
    },
    })),
    {
      name: 'usePhotoState'
    }
  )
);

export default usePhotoState;
