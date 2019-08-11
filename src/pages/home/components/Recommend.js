import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendList, RecommendItem} from '../style';


class Recommend extends PureComponent {

    render() {
        return (
            <RecommendList>
                {
                    this.props.list.map((item) => {
                        return (

                            <RecommendItem key={item.get('id')}>
                                <img alt=''
                                     src={item.get('imgUrl')}
                                />
                            </RecommendItem>
                        )
                    })
                }
            </RecommendList>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'commendList']),
});

export default connect(mapStateToProps, null)(Recommend);