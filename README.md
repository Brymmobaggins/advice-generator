# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building real projects.

## Screenshot

![alt](/images/Screen%20Shot%202022-06-09%20at%204.25.40%20PM.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I was able to use the `fetch data` built-in function to fetch data with the API given `https://api.adviceslip.com/advice` from its webserver and populate it on the web client, with the following code below.

```js
const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    const { slip } = data
    adviceId.textContent = `${slip.id}`
    adviceContent.textContent = `${slip.advice}`
}
```

### Useful resources

[box-shadow Generator](https://cssgenerator.org/) - This helped me to achieve the requested box shadow for the button. I liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Brymmobaggins](https://www.frontendmentor.io/profile/Brymmobaggins)
- Twitter - [@Brymmobaggins](https://www.twitter.com/Brymmobaggins)
