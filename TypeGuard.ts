
import { Rating } from "./Customtypes";
export function isRating(value: number): value is Rating {
    return [1, 2, 3, 4, 5].includes(value);
}
