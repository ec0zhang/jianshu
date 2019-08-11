import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {ListInfo, ListItem, LoadMore} from '../style'
import {actionCreators} from "../store";

class List extends PureComponent {

    render() {
        const {list, handleMoreList, page} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <img alt='' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h3><Link className='aaa' to={'/detail/' + item.get('id')}>{item.get('title')}</Link></h3>
                                    <p>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => handleMoreList(page)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
});

const mapDispatchToProps = (dispatch) => ({
    handleMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);