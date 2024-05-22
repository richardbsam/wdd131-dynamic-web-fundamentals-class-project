const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('');
const li = document.createElement('li');
const deleteBotton = document.createElement('botton');

li.textContent = input.value;

deleteBotton.textContent = '';

li.append(deleteButton);
list.append(li);




button.addEventListener('click', function() {
	if (input.value.trim() !== '') { const input = document.querySelector('#favchap');
		const button = document.querySelector('button');
		const list = document.querySelector('');
		const li = document.createElement('li');
		const deleteBotton = document.createElement('botton');
		
		li.textContent = input.value;
		
		deleteBotton.textContent = '';
		
		li.append(deleteButton);
		list.append(li);
		};
});



deleteBotton.addEventListener('click', function() {
	list.removeChild(li);
	input.focus();
	input.value = '';
	input.focus();
});