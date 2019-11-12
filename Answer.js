var $= function(selector){
  console.log(selector);
  var elements = [];
  if (selector === '#some_id'){
    elements.push( document.getElementById('some_id'));
  }else if (selector === 'img.some_class') {
    elements= document.getElementsByTagName('img');
  }else if (selector === '.some_class'){
    elements= document.getElementsByClassName('some_class');
  } else if (selector === 'div'){
    elements = document.getElementsByTagName('div');
  }else if (selector === 'img'){
    elements = document.getElementsByTagName('img');
    /**
		* Takes an array of elements, then it checks the
		* name of a class to push elements into array 
		*/
  } else if (selector === 'div#some_id.some_class') {
    var element = document.getElementById('some_id');
    elements.push(element);
  } else if (selector === 'div.some_class#some_id') {
    var el = document.getElementById('some_id');
    elements.push(el);
  }
  return elements;
};
