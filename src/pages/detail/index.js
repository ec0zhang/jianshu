import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Note, NoteTitle, Text,} from './style';
import {connect} from 'react-redux';
import {actionCreators} from "./store";

class Detail extends Component {

    render() {
        // console.log(this.props.match.params.id);
        return (
            <Note>
                <NoteTitle>{this.props.title}</NoteTitle>
                <Text dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </Note>
        )
    }

    componentDidMount() {
        this.props.getContent(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = (dispatch) => ({
    getContent(id) {
        dispatch(actionCreators.getContent(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));