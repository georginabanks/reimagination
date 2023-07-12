export default function SubmitPost(data, sendingButton, doneButton, setButton) {
	setButton(sendingButton);
	console.log(data);
	setButton(doneButton);
}