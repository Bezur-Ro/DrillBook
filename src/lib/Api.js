// import Axios from "axios";

const LOCAL_STORAGE_KEY = 'drilldrill';
const STATIC_DEFAULT_IMAGES = [

];

export default class Api {
	static LOCAL_STORAGE_KEY = LOCAL_STORAGE_KEY;
	
	static async fetchImages() {
		let savedImages = await Api.storageGet(LOCAL_STORAGE_KEY);

		if (!savedImages || savedImages.length === 0) {
			await Api.storageSet(LOCAL_STORAGE_KEY, STATIC_DEFAULT_IMAGES);
			savedImages = STATIC_DEFAULT_IMAGES;
		}

		return savedImages;
	}

	static storageSet(key, val) {
		localStorage.setItem(key, JSON.stringify(val));
	}

	static storageGet(key) {
		return JSON.parse(localStorage.getItem(key));
	}
}