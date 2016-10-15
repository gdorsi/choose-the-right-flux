import getHashValue from './getHashValue';
import compose from 'lodash/fp/compose';

export default compose(parseInt, getHashValue);
