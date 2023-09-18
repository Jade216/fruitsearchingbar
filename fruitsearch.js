const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let newStr = str.toLowerCase();
	let results = [];
     for (let i=0; i<fruit.length; i++){
		let fruits = fruit[i].toLowerCase();
		if (fruits.includes(newStr)){
			results.push(fruits[i])
		}
	 }

	return results;
}

function searchHandler(e) {
	let inputVal = e.target.value;
	let results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	if (inputVal === ''){
		suggestions.style.display = 'none';
		return;
	}
    results.forEach((item) => {
		let li = document.createElement('li');
		li.textContent = item;
        suggestions.appendChild(li);
	})
	suggestions.style.display = 'block';
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI'){
		input.value = e.target.textContent;
		suggestions.style.display = 'none';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

suggestions.addEventListener('mouseover', (e) => {
	
	if (e.target.tagName === 'LI') {
	  e.target.classList.add('highlighted');
	}
  });
  
  suggestions.addEventListener('mouseout', (e) => {
	
	if (e.target.tagName === 'LI') {
	  e.target.classList.remove('highlighted');
	}
  });
  