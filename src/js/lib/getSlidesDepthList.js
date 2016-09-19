import map from 'lodash/fp/map';

export default map((slide) => {
    return slide.querySelectorAll('.fragment').length;
});
