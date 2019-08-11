import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterList, WriterTop, WriterItem} from '../style';


class Writer extends PureComponent {

    constructor(props) {
        super(props);

        this.handleChangeDeg = this.handleChangeDeg.bind(this);
    }

    render() {
        return (
            <WriterList>
                <WriterTop>
                    <span>推荐作者</span>
                    <span className='right'
                          onClick={() => this.handleChangeDeg(this.icon)}
                    >换一批</span>
                    <span className="iconfont"
                          ref={(icon) => {
                              this.icon = icon;
                          }}
                          onClick={() => this.handleChangeDeg(this.icon)}
                    >&#xe851;</span>

                </WriterTop>
                {
                    this.props.list.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <img
                                    alt=''
                                    src={item.get('imgUrl')}
                                />
                                <span className='user-name'>{item.get('name')}</span>
                                <span className='desc'>{item.get('desc')}</span>
                                <span className='follow'>{item.get('click')}</span>
                            </WriterItem>
                        )
                    })
                }

            </WriterList>
        )
    }

    handleChangeDeg(icon) {
        let iconD = icon.style.transform.replace(/[^0-9]/ig, '');
        if (iconD) {
            iconD = parseInt(iconD, 10);
        } else {
            iconD = 0;
        }
        icon.style.transform = 'rotate(' + (iconD + 360) + 'deg)';
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'WriterList']),
});

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Writer);