var e=function(){var e=document.createElement("div");return e.setAttribute("data-qa","notification"),e},n=e();new Promise(function(e,n){var t=!1;document.addEventListener("click",function(){t=!0,e("First promise was resolved")}),setTimeout(function(){t||n("First promise was rejected")},3e3)}).then(function(e){n.classList.add("success"),n.innerText=e,document.body.append(n)}).catch(function(e){n.classList.add("error"),n.innerText=e,document.body.append(n)});var t=e();new Promise(function(e,n){var t=function(){e("Second promise was resolved")};document.addEventListener("click",t),document.addEventListener("contextmenu",t)}).then(function(e){t.classList.add("success"),t.innerText=e,document.body.append(t)});var c=e();new Promise(function(e,n){var t=!1,c=!1;document.addEventListener("click",function(){t=!0,c&&e("Third promise was resolved")}),document.addEventListener("contextmenu",function(n){n.preventDefault(),c=!0,t&&c&&e("Third promise was resolved")})}).then(function(e){c.classList.add("success"),c.innerText=e,document.body.append(c)});
//# sourceMappingURL=index.fd7e2db6.js.map
