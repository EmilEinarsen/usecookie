import { useState } from 'react'
import { set as setCookie, get as getCookie } from 'bjork_cookie'

function useCookie(key, initialValue) {
	const [item, setItem] = useState(getCookie(key, initialValue))
  
	return [
		item, 
		(value, options) => {
			setItem(value)
		  	setCookie(key, value, options)
	 	 }
	]
}

export { setCookie, getCookie }
export default useCookie