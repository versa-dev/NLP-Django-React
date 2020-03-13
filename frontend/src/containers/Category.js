import React from "react";
import "./Container.css";
import { user_cat_tool, user_item_tool } from "../store/actions/user";
import { connect } from "react-redux";

class Category extends React.Component {
    cat_click = (e) => {
        debugger
        var title = e.target.text;
        this.props.cat_tool(title);
    }

    item_click = (e) => {
        debugger
        var titleid = e.target.name;
        var category = e.target.text;
        this.props.item_tool(titleid, category);
    }
    render() {
        return (
            <div>
                <nav id="sidebar">
                    <ul className="list-unstyled components" id="sidebar">
                        <li>
                            <li className="sub_li"><a href="#1Submenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle sub_a" onClick={this.cat_click}>Recommendation System</a></li>
                            <ul className="collapse list-unstyled subul" id="1Submenu">
                                <li>
                                    <a href="#" onClick={this.item_click} name="1">Article Recommender</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <li className="sub_li"><a href="#2Submenu" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle" onClick={this.cat_click}>Classification</a></li>
                            <ul className="collapse list-unstyled subul" id="2Submenu">
                                <li>
                                    <a href="#" onClick={this.item_click} name="2">Sentiment Analysis</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="2">Topic Detection</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="2">Language Detection</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <li className="sub_li"> <a href="#3Submenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle" onClick={this.cat_click}>Extraction</a></li>
                            <ul class="collapse list-unstyled subul" id="3Submenu">
                                <li>
                                    <a href="#" onClick={this.item_click} name="3">Text Summarization</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="3">Entity Extraction</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="3">Keyword Extraction</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="3">Article Extraction</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <li className="sub_li"><a href="#4Submenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle" onClick={this.cat_click}>Text Pre-processing</a></li>
                            <ul className="collapse list-unstyled subul" id="4Submenu">
                                <li>
                                    <a href="#" onClick={this.item_click} name="4">Lemmatization</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="4">Tokenize</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="4">Convert Uppercase to Lower</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="4">Remove Numbers</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="4">Remove White Spaces</a>
                                </li>
                                <li>
                                    <a href="#" onClick={this.item_click} name="4">Remove Stopwords</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <li className="sub_li"><a href="#5Submenu" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle" onClick={this.cat_click}>Plagarism</a></li>
                            <ul class="collapse list-unstyled subul" id="5Submenu">
                                <li>
                                    <a href="#" onClick={this.item_click} name="5">Plagarism</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cat_tool: (title) => dispatch(user_cat_tool(title)),
        item_tool: (titleid, category) => dispatch(user_item_tool(titleid, category))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Category);

