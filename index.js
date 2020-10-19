import { useState } from 'react'
import { set as setCookie, get as getCookie, set } from 'bjork_cookie'

function useCookie(key, initialValue) {
	const [item, setItem] = useState(() => {
	  	return getCookie(key, initialValue)
	})
  
	const updateItem = (value, options) => {
	  	setItem(value)
	 	setCookie(key, value, options)
	};
  
	return [item, updateItem]
}

export { setCookie, getCookie }
export default useCookie