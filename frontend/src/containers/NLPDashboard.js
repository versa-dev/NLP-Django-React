import React, { Component } from "react";
import "./Container.css";
import { connect } from "react-redux";
import Category from "./Category.js";
import ToolBox from "./ToolBox.js";

class NlpDashboard extends Component {
    render() {
        const { title } = this.props;
        return (
            <div>
                <div style={{ height: 40 }}></div>

                <div className="row wrapper">
                    <div className="sidebar col-md-2">
                        <div className="imground">
                            <img src="embecia.png" className="emimage" />
                        </div>
                        <Category />
                    </div>
                    <div className="bodybar col-md-10">
                        <div className="bodymargin">
                            <h4 className="cattitle">{title}</h4>
                        </div>
                        <ToolBox />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.user.title
    };
};

export default connect(
    mapStateToProps, null
)(NlpDashboard);