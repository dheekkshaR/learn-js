window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}



function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}


function createTD2Node() {
  
  // Create a button element
  let editButton = document.createElement("button");
  editButton.textContent = "Edit Text";

  // Add event listener to the button
  editButton.addEventListener("click", function() {
    editCell(this); // Pass the button as a reference to the editCell function
  });
  return editButton;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createTD2Node());
    tableNode.appendChild(createTRNode([col1,col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function editCell(button) {
  // Get the parent td element (col2)
  let col2 = button.parentNode;

  // Get the parent tr element
  let tr = col2.parentNode;

  // Find the col1 element within the tr
  let col1 = tr.firstChild;

  // Replace col1 content with an input element
  let input = document.createElement('input');
  input.type = 'text';
  input.value = 'Enter cell (x,y)';

  // Remove existing child nodes (text node)
  while (col1.firstChild) {
    col1.removeChild(col1.firstChild);
  }
  // Append the input element to col1
  col1.appendChild(input);
}
