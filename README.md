# What is this?

An object containing four methods for managing cookies. The main methods set and get. And the secondary methods check and destroy.


## Install
Use npm to install bjork_cookies or copy the code manually form [github](https://github.com/EmilEinarsen/bjork_cookie).
```bash
> npm i bjork_cookies
```
## Usage
Utilizes and, therefor, functions like Reacts **useState**. 
The diffrence being that setState takes a second, optional, param _options_ that configures how the cookie is packaged. 
For more information checkout the function _set_ at the dependancy [bjork_cookie](https://github.com/EmilEinarsen/bjork_cookie).
```js
> import useCookie from 'bjork_usecookie'
>
> const [ state, setState ] = useCookie(_default_)
> setState(value, options?)
```
## Contribution
Pull requests are welcome. For any considerable changes, please open an issue first to discuss what you would like to change.<br>

## Licence
[MIT](https://github.com/EmilEinarsen/bjork_restrain/blob/master/LICENSE)
