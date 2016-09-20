export const fragment = (state) => state.fragment;
export const slide = (state) => state.slide;
export const completion = (state) => slide(state) / (state.slidesCount - 1) * 100;
export const slideDepth = (state, slide) => state.depthList[slide];
export const hasNext = (state) => slide(state) < state.slidesCount - 1 || fragment(state) < slideDepth(state, slide(state)) - 1;
export const hasPrev = (state) => slide(state) > 0 || fragment(state) >= 0;