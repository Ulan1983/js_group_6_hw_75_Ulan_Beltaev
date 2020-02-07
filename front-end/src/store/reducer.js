import {CODE_ERROR, DECODE_SUCCESS, ENCODE_SUCCESS, INPUT_VAL} from "./actions";

const initialState = {
	encode: '',
	decode: '',
	password: '',
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ENCODE_SUCCESS:
			return {
				...state,
				encode: action.data,
				decode: '',
				password: ''
			};
		case DECODE_SUCCESS:
			return {
				...state,
				encode: '',
				decode: action.data,
				password: ''
			};
		case CODE_ERROR:
			return {
				...state,
				error: action.error
			};
		case INPUT_VAL:
			return {
				...state,
				[action.event.target.name]: action.event.target.value
			};
		default:
			return state
	}
};

export default reducer;