//--------------//
// DOM Elements //
//--------------//

const root_container = document.querySelector(".root-container");
const fa_eye_icons = document.querySelectorAll(".fa-eye-slash");
const input_groups = document.querySelectorAll(".input-group");
const redirect_links = document.querySelectorAll(".redirect-link");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");

//-----------//
// Functions //
//-----------//

const toggleAnimations = () => {
	root_container.classList.toggle("login");
	root_container.classList.toggle("register");
};

const togglePasswordIcon = pw_icon => {
	pw_icon.classList.toggle("fa-eye-slash");
	pw_icon.classList.toggle("fa-eye");
};

const togglePasswordVisibility = input_element => {
	if (input_element.type === "password") return input_element.type = "text";
	input_element.type = "password";
};

// Trigger the login animations after the page first loads
setTimeout(() => {
	root_container.classList.add("login");
}, 200)

//-----------------//
// Event Listeners //
//-----------------//

// Redirect links don't actually redirect (as href does). They apply animations and css
// that focuses the browser window to either the login or register components
redirect_links.forEach(redirect_link => {
	redirect_link.addEventListener("click", () => {
		toggleAnimations();
	})
});

// Pass focus to the input element when we click anywhere inside an input-group
input_groups.forEach(input_group => {
	const input = input_group.children[1];
	input_group.addEventListener("click", () => {
		input.focus();
	})
})

// Use font awesome eye icon to toggle password visibility of password input
// for both login and register forms
fa_eye_icons.forEach(icon => {
	const input = icon.parentNode.children[1];
	
	icon.addEventListener("click", () => {
        togglePasswordIcon(icon);
		togglePasswordVisibility(input);
    });
});

registerForm.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("This form is for demonstration purposes only.")
})

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("This form is for demonstration purposes only.")
})