import React from "react";
import "./Container.css";
import { connect } from "react-redux";

class ToolBox extends React.Component {
    render() {
        var category = this.props.category;
        return (
            <div>
                <div style={{ height: 60 }}></div>
                <div className="txtinput">
                    <div style={{ height: 30 }}></div>
                    <div className="wrapperform">
                        <div><h5 className="title">{category}</h5></div>
                        <textarea className="form-control"></textarea>
                        <button className="cusbtn">Detect</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.user.category
    };
};

export default connect(
    mapStateToProps, null
)(ToolBox);