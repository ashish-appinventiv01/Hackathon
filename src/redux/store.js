import { createStore} from 'redux';
import  expenditureReducer from './Reducer';

const store = createStore( expenditureReducer);

export default store;
