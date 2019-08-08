import React, {Component} from 'react';
import {connect} from "react-redux";
import {ListInfo, ListItem} from '../style'

class List extends Component {

    render() {
        return (
            <div>
                {
                    this.props.list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img alt='' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
});


export default connect(mapStateToProps, null)(List);