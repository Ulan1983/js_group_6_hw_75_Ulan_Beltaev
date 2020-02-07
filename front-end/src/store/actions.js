import axiosApi from "../axiosApi";

export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';
export const DECODE_SUCCESS = 'DECODE_SUCCESS';
export const CODE_ERROR = 'CODE_ERROR';
export const INPUT_VAL = 'INPUT_VAL';

export const encodeSuccess = data => ({type: ENCODE_SUCCESS, data});
export const decodeSuccess = data => ({type: DECODE_SUCCESS, data});
export const codeError = error => ({type: CODE_ERROR, error});
export const inputVal = event => ({type: INPUT_VAL, event});

export const fetchEncode = data => {
	return async (dispatch) => {
		try {
			const text = await axiosApi.post('/encode', data);
			dispatch(encodeSuccess(text.data.encoded));
		} catch (error) {
			dispatch(codeError(error));
		}
	}
};

export const fetchDecode = data => {
	return async (dispatch) => {
		try {
			const text = await axiosApi.post('/decode', data);
			dispatch(decodeSuccess(text.data.decoded));
		} catch (error) {
			dispatch(codeError(error));
		}
	}
};

