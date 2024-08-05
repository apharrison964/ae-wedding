import { Food } from "../../src/API";

export function enumToFood(food: Food) {
    switch (food) {
        case Food.GRILLED_CHICKEN: 
            return 'Grilled Chicken'
        case Food.SHRIMP:
            return 'Shrimp'
        case Food.OTHER:
            return 'Vegetarian'
        default:
            return '';    
    }
}