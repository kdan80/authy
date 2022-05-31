# authy
User creation, login and session management app for my portfolio

![alt text](https://raw.githubusercontent.com/kdan80/authy/master/public/images/authy.webp)

<p>
	A portfolio project built to demonstrate knowledge of user creation, password hashing, session management etc. This project was built with expressjs, ejs, mongodb and uses cookies for session management
</p>


#### Slick loader animations

<p>
Orchestrated first page load animations using CSS.
</p>

![stream video](https://github.com/kdan80/authy/blob/master/webp/authy-load-animation.webp)


#### Responsive design

<p>
Animations scale to accommodate a mobile viewport.
</p>

![stream video](https://github.com/kdan80/authy/blob/master/webp/authy-responsive.webp)

#### Create a user

<p>
User creation is handled by an express route which utilises joi validation and a mongodb backend.
</p>

![stream video](https://github.com/kdan80/authy/blob/master/webp/authy-create-user.webp)

#### Login

<p>
User authentication is handled by an express route that uses bcrypt.compare() for password handling and express-session to generate a session token.
</p>

![stream video](https://github.com/kdan80/authy/blob/master/webp/authy-login.webp)
