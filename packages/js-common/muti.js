import {spendTime} from "./spendTime.js";
export function muti(...nums) {
    spendTime();
    let num1 = nums[0];
    let num2 = nums[1];
    return num1 * num2;
}
