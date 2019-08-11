import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as pagesReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store'

// reducer 的目录
const reducer = combineReducers({
    header: headerReducer,
    home:homeReducer,
    detail:pagesReducer,
    login:loginReducer,
});

export default reducer;