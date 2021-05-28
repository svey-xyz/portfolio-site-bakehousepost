/*
*  Submit contact form
*/

import * as emailjs from 'emailjs-com'
import { init } from 'emailjs-com';

let form:HTMLFormElement

export const mount = (container: Element) => {
	form = <HTMLFormElement>container
	form.addEventListener("submit", submitForm);
}

function submitForm(e:Event) {
	e.preventDefault();

	//   Get input Values
	let name:string = (<HTMLInputElement>form.querySelector("#Name")).value;
	let fromEmail:string = (<HTMLInputElement>form.querySelector("#Email")).value;
	let message:string = (<HTMLInputElement>form.querySelector("#Message")).value;

	sendContactMessage(name, fromEmail, message);
	form.reset();
}

function sendContactMessage(name: string, fromEmail:string, message:string) {
	let emailSelectors:NodeListOf<Element> = form.querySelectorAll(".email-response")!;
	emailSelectors.forEach(selector => {
		selector.classList.add('hidden');
	});

	init("user_JHPlqxuUS8o2vXL540O8u");
	
	const email = {
		from_name: name,
		reply_to: fromEmail,
		message: message
	};
	
	emailjs.send('service_13j22mc', 'template_ircgzrg', email)
		.then(function (response) {
			console.log(`Message sent with response: ${response}`);
			form.querySelector("#emailSuccess")!.classList.remove('hidden');
		}, function (err) {
			console.log(`Message error: ${err}`)
			form.querySelector("#emailFailure")!.classList.remove('hidden');
		});
}

