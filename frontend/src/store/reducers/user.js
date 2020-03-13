import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    title: "Recommedation System",
    category: "Article Recommendation"
};

const user_item_tool = (state, action) => {
    var title = "";
    switch (action.titleid) {
        case "1":
            title = "Recommendation System"; break;
        case "2":
            title = "Classification"; break;
        case "3":
            title = "Extraction"; break;
        case "4":
            title = "Text Pre-processing"; break;
        case "5":
            title = "Plagarism"; break;
        default:
            title = "Recommendation System";
    }

    return updateObject(state, {
        title: title,
        category: action.category
    });
};

const user_cat_tool = (state, action) => {
    var category = ""
    switch (action.title) {
        case "Recommendation System":
            category = "Article Recommender"; break;
        case "Classification":
            category = "Sentiment Analysis"; break;
        case "Extraction":
            category = "Text Summarization"; break;
        case "Text Pre-processing":
            category = "Lemmatization"; break;
        case "Plagarism":
            category = "Plagarism"; break;
        default:
            category = "Article Recommender";

    }

    return updateObject(state, {
        title: action.title,
        category: category
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_CAT:
            return user_cat_tool(state, action);
        case actionTypes.USER_ITEM:
            return user_item_tool(state, action);
        default:
            return state;
    }
};

export default reducer;