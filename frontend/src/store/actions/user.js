import * as actionTypes from "./actionTypes";

export const user_item_tool = (titleid, category) => {
    return {
        type: actionTypes.USER_ITEM,
        titleid: titleid,
        category: category
    };
};

export const user_cat_tool = (title) => {
    return {
        type: actionTypes.USER_CAT,
        title: title
    };
};

