import src from './image.png'
import './content.css'

const html = `
<div class="crx">
   <h1>Made with</h1>
  <img src="${chrome.runtime.getURL(src)}" alt="">
</div>
`

const doc = new DOMParser().parseFromString(html, 'text/html')
document.body.append(doc.body.firstElementChild)
