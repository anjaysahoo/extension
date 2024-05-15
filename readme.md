## Chrome Extensions

Referred Video: https://youtu.be/GGi7Brsf7js?si=t9keVe8_psMfw-3v
<details >
 <summary style="font-size: large; font-weight: bold">Basic Concepts</summary>


![img.png](images/img.png)



### Service Worker Context

Service works run in background and are not visible to the user.
It is same for web page as well

![img_2.png](images/img_2.png)

Below is the configuration we need to have for service worker in manifest.json
![img_3.png](images/img_3.png)

- Here `action` key is for `chrome.action` we used
- Since we want to run service worker in background we mention
its path in `background` key
- For running script, we need scripting permission
- `host_persmission` help us define where can allow running our script.
Here we're enabled to run everywhere


### Popup Context

![img_4.png](images/img_4.png)

![img_5.png](images/img_5.png)

![img_6.png](images/img_6.png)

- Here inside `action` we declare our popup page
- Here in `index.js` `document.getElementById('myButton')` refer to `index.html`
DOM

### Content Script Context

![img_7.png](images/img_7.png)

- Here in same `index.js` highlighted `document.body` refer to the page 
where it is currently running

![img_8.png](images/img_8.png)
Here it will be `body` of this `example.com` page

**File used for simple extension**
![img_9.png](images/img_9.png)

</details>



<details >
 <summary style="font-size: large; font-weight: bold">Using Vite</summary>

### Step-1 
Start with normal Vite app creation through

```bash
npm create vite@latest
```

### Step-2

Place `manifest.json` file in public folder
so that after build it is placed at the root of `dist` folder

![img_10.png](images/img_10.png)

### Step-3

```bash
npm run build
```

After this load the generated `dist` folder to the browser

That's it, now we can access our extension.


### How to load UI on extension pop-up

![img_11.png](images/img_11.png)

![img_12.png](images/img_12.png)


### How to access current tab info and show alert

```bash
npm i -D @types/chrome
```
![img_13.png](images/img_13.png)
![img_14.png](images/img_14.png)


### How to change `background color` of the page where extension is running

![img_15.png](images/img_15.png)


### How to change the `background color` of the tab through popup

![img_16.png](images/img_16.png)

![img_18.png](images/img_18.png)
❌ This will not work as the highlighted function is running in context 
 where the tab is currently on. Whereas `colour` variable is running in context of 
pop-up.


![img_19.png](images/img_19.png)
✅ This will work, as we are passing it through `args: [colour]`

![img_20.png](images/img_20.png)
</details>
