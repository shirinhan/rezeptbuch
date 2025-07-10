let recipes = [
  {
    id: 'recipe1',
    name: 'Reispfanne mit Thunfisch & Pilzen',
    ingredients: ['reis', 'thunfisch', 'pilze', 'zwiebel', 'öl', 'salz', 'pfeffer'],
    time: 20,
    tags: ['hauptgericht', 'warm', 'nicht-lowcarb', 'schnell'],
    instruction: 'Reis nach Packungsanleitung kochen. Zwiebel und Pilze in Öl anbraten, Thunfisch zufügen und kurz mitbraten. Gekochten Reis zugeben, alles gut vermengen und mit Salz und Pfeffer abschmecken.'
  },
  {
    id: 'recipe2',
    name: 'Toast mit Serano, Ei & Gurken',
    ingredients: ['toast', 'serano-schinken', 'ei', 'gurke', 'öl', 'salz', 'pfeffer'],
    time: 10,
    tags: ['snack', 'kalt', 'nicht-lowcarb', 'schnell'],
    instruction: 'Toast rösten. Ei in einer Pfanne mit etwas Öl braten und würzen. Toast mit Serano-Schinken, gebratenem Ei und Gurkenscheiben belegen.'
  },
  {
    id: 'recipe3',
    name: 'Haferflocken-Apfel-Joghurt-Frühstück',
    ingredients: ['haferflocken', 'apfel', 'joghurt', 'honig'],
    time: 5,
    tags: ['frühstück', 'kalt', 'nicht-lowcarb', 'schnell'],
    instruction: 'Apfel in kleine Stücke schneiden. Haferflocken, Apfelstücke und Joghurt in einer Schale vermengen. Nach Belieben mit Honig süßen.'
  },
  {
    id: 'recipe4',
    name: 'Nudelauflauf mit Tomaten & Wurst',
    ingredients: ['nudeln', 'wurst', 'tomatenmark', 'käse', 'salz', 'pfeffer'],
    time: 30,
    tags: ['hauptgericht', 'warm', 'nicht-lowcarb', 'auflauf'],
    instruction: 'Nudeln kochen. Wurst in Scheiben schneiden, mit Tomatenmark vermengen und mit den Nudeln in eine Auflaufform geben. Mit Käse bestreuen und im Ofen überbacken, bis der Käse goldbraun ist.'
  },
  {
    id: 'recipe5',
    name: 'Erbsensuppen-Toast mit Kochschinken',
    ingredients: ['brot', 'erbsensuppe', 'kochschinken'],
    time: 10,
    tags: ['snack', 'warm', 'nicht-lowcarb'],
    instruction: 'Brot toasten. Erbsensuppe erhitzen. Toast mit Kochschinken belegen, heiße Erbsensuppe darüber geben und sofort servieren.'
  },
  {
    id: 'recipe6',
    name: 'Serano-Röllchen mit Gurken & Peperoni',
    ingredients: ['serano-schinken', 'gurke', 'peperoni'],
    time: 10,
    tags: ['snack', 'kalt', 'lowcarb', 'fingerfood'],
    instruction: 'Gurke und Peperoni in Streifen schneiden. Jeweils einige Streifen in eine Scheibe Serano-Schinken einwickeln. Als Fingerfood servieren.'
  },
  {
    id: 'recipe7',
    name: 'Thunfisch-Pilz-Oliven-Pfanne',
    ingredients: ['thunfisch', 'pilze', 'oliven', 'öl', 'salz', 'pfeffer'],
    time: 15,
    tags: ['hauptgericht', 'warm', 'lowcarb', 'eiweißreich'],
    instruction: 'Pilze in Scheiben schneiden und in Öl anbraten. Thunfisch und Oliven zugeben, alles zusammen braten und mit Salz und Pfeffer würzen.'
  },
  {
    id: 'recipe8',
    name: 'Eier mit Joghurt-Dip & Oliven',
    ingredients: ['eier', 'joghurt', 'oliven', 'gewürze', 'salz', 'pfeffer'],
    time: 10,
    tags: ['snack', 'kalt', 'lowcarb', 'frisch'],
    instruction: 'Eier hart kochen, schälen und halbieren. Joghurt mit Gewürzen, Salz und Pfeffer verrühren. Eier mit Joghurt-Dip und Oliven servieren.'
  },
  {
    id: 'recipe9',
    name: 'Hähnchensnack mit Peperoni & Dip',
    ingredients: ['hähnchen', 'peperoni', 'dip', 'öl', 'gewürze'],
    time: 15,
    tags: ['hauptgericht', 'warm', 'lowcarb', 'snack'],
    instruction: 'Vorgegarte Hähnchenteile in Öl anbraten, mit Peperoni servieren. Einen scharfen Dip nach Wahl dazu reichen.'
  },
  {
    id: 'recipe10',
    name: 'Wurst-Gemüse-Pfanne mit Tomatenmark',
    ingredients: ['wurst', 'tomatenmark', 'pilze', 'gewürze', 'öl'],
    time: 15,
    tags: ['hauptgericht', 'warm', 'lowcarb', 'pfanne'],
    instruction: 'Wurst in Scheiben schneiden, in Öl anbraten. Pilze zugeben, kurz mitbraten. Tomatenmark und Gewürze zugeben, alles gut vermengen.'
  },
  {
    id: 'recipe11',
    name: 'Schinken-Oliven-Röllchen',
    ingredients: ['kochschinken', 'oliven', 'gurke'],
    time: 10,
    tags: ['snack', 'kalt', 'lowcarb', 'fingerfood'],
    instruction: 'Gurke und Oliven klein schneiden. In Scheiben Kochschinken füllen und zu Röllchen aufrollen.'
  },
  {
    id: 'recipe12',
    name: 'Warme Erbsensuppe mit Wurst',
    ingredients: ['erbsensuppe', 'wurst', 'gewürze'],
    time: 20,
    tags: ['hauptgericht', 'warm', 'lowcarb'],
    instruction: 'Erbsensuppe nach Packungsanleitung zubereiten. Wurst in Scheiben schneiden, in der Suppe erwärmen und mit Gewürzen abschmecken.'
  },
  {
    id: 'recipe13',
    name: 'Tomaten-Pilz-Omelett',
    ingredients: ['eier', 'pilze', 'tomatenmark', 'öl', 'salz', 'pfeffer'],
    time: 10,
    tags: ['frühstück', 'warm', 'lowcarb', 'omelett'],
    instruction: 'Eier verquirlen, mit Salz und Pfeffer würzen. Pilze in Öl anbraten, Tomatenmark zugeben. Eiermasse dazugeben und stocken lassen.'
  },
  {
    id: 'recipe14',
    name: 'Apfel-Joghurt-Sahne-Dessert',
    ingredients: ['apfel', 'joghurt', 'sahne', 'honig'],
    time: 5,
    tags: ['dessert', 'kalt', 'lowcarb'],
    instruction: 'Apfel in Stücke schneiden. Joghurt und Sahne verrühren, Apfelstücke unterheben und mit wenig Honig süßen.'
  },
  {
    id: 'recipe15',
    name: 'Hähnchen-Gurken-Salat mit Mayo',
    ingredients: ['hähnchen', 'gurke', 'peperoni', 'mayonnaise', 'gewürze'],
    time: 10,
    tags: ['salat', 'kalt', 'lowcarb', 'cremig'],
    instruction: 'Hähnchen in Stücke schneiden. Gurke und Peperoni würfeln. Alles mit Mayonnaise und Gewürzen vermengen.'
  },
  {
    id: 'recipe16',
    name: 'Gebratener Fisch mit Gurken-Salat',
    ingredients: ['fischfilet', 'gurke', 'peperoni', 'öl', 'salz', 'pfeffer'],
    time: 20,
    tags: ['hauptgericht', 'warm', 'lowcarb', 'fisch'],
    instruction: 'Fischfilet in Öl braten, mit Salz und Pfeffer würzen. Gurke und Peperoni in Scheiben schneiden, als frischen Salat dazu servieren.'
  },
  {
    id: 'recipe17',
    name: 'Fischfilet mit Joghurt-Dip & Oliven',
    ingredients: ['fischfilet', 'joghurt', 'oliven', 'kräuter', 'öl', 'salz', 'pfeffer'],
    time: 20,
    tags: ['hauptgericht', 'warm', 'lowcarb', 'fisch'],
    instruction: 'Fischfilet in Öl braten, würzen. Joghurt mit Kräutern, Salz und Pfeffer verrühren. Fisch mit Joghurt-Dip und Oliven servieren.'
  },
  {
    id: 'recipe18',
    name: 'Fisch-Gemüse-Pfanne mit Tomatenmark',
    ingredients: ['fisch', 'pilze', 'tomatenmark', 'öl', 'gewürze'],
    time: 15,
    tags: ['hauptgericht', 'warm', 'lowcarb', 'fisch'],
    instruction: 'Fisch in Würfel schneiden, in Öl anbraten. Pilze und Tomatenmark zugeben, mit Gewürzen abschmecken und kurz schmoren lassen.'
  },
  {
    id: 'recipe19',
    name: 'Fischsalat mit Mayo, Ei & Gurken',
    ingredients: ['fisch', 'ei', 'gurke', 'mayonnaise', 'gewürze'],
    time: 10,
    tags: ['salat', 'kalt', 'lowcarb', 'sättigend'],
    instruction: 'Fisch und gekochte Eier in Stücke schneiden. Gurke würfeln. Alles mit Mayonnaise und Gewürzen vermengen und kalt servieren.'
  },
  {
    id: 'recipe20',
    name: 'Fisch mit Sahne-Kräuter-Soße',
    ingredients: ['fisch', 'sahne', 'kräuter', 'öl', 'salz', 'pfeffer'],
    time: 20,
    tags: ['hauptgericht', 'warm', 'lowcarb', 'fisch'],
    instruction: 'Fisch in Öl braten, würzen. Sahne mit Kräutern verrühren, kurz aufkochen und als Soße über den Fisch geben.'
  }
];

let currentSort = 'time';
let tagFilterState = {};
let openInstructionRowId = null;

function getAllTags() {
  const tagSet = new Set();
  recipes.forEach(r => {
    if (Array.isArray(r.tags)) {
      r.tags.forEach(tag => tagSet.add(tag));
    }
  });
  return Array.from(tagSet).sort();
}

function renderTagToggleFilter() {
  const tagDiv = document.getElementById('tag-toggle-filter');
  const tags = getAllTags();
  tagDiv.innerHTML = '';
  tags.forEach(tag => {
    let state = tagFilterState[tag] || 'reset';
    let btnClass = 'tag-toggle-btn reset';
    let symbol = '';
    if (state === 'include') {
      btnClass = 'tag-toggle-btn include';
      symbol = '✔ ';
    } else if (state === 'exclude') {
      btnClass = 'tag-toggle-btn exclude';
      symbol = '✖ ';
    }
    tagDiv.innerHTML += `<button type="button" class="${btnClass}" data-tag="${tag}" onclick="toggleTagFilter('${tag}')">${symbol}${tag.charAt(0).toUpperCase() + tag.slice(1)}</button>`;
  });
}

function toggleTagFilter(tag) {
  if (!tagFilterState[tag] || tagFilterState[tag] === 'reset') {
    tagFilterState[tag] = 'include';
  } else if (tagFilterState[tag] === 'include') {
    tagFilterState[tag] = 'exclude';
  } else if (tagFilterState[tag] === 'exclude') {
    tagFilterState[tag] = 'reset';
  }
  renderTagToggleFilter();
  filterRecipes();
}

function renderOverview(filteredRecipeIds = null) {
  const overview = document.getElementById('overview-body');
  overview.innerHTML = '';
  let sortedRecipes = [...recipes];

  if (currentSort === 'time') {
    sortedRecipes.sort((a, b) => a.time - b.time);
  } else if (currentSort === 'name') {
    sortedRecipes.sort((a, b) => a.name.localeCompare(b.name, 'de', {sensitivity:'base'}));
  } else if (currentSort === 'tagcount') {
    sortedRecipes.sort((a, b) => a.tags.length - b.tags.length);
  }

  sortedRecipes.forEach((r, i) => {
    if (filteredRecipeIds && !filteredRecipeIds.has(r.id)) return;

    const row = document.createElement('tr');
    row.id = "row-" + r.id;
    row.className = "overview-row";
    row.innerHTML = `<td class="rezeptname-cell" style="cursor:pointer; color:#8fd4ff; text-decoration:underline;">${r.name}</td>
      <td>${r.time} Min</td>
      <td>${r.ingredients.join(', ')}</td>
      <td>${r.tags.join(', ')}</td>`;
    overview.appendChild(row);

    row.querySelector('.rezeptname-cell').onclick = function(e) {
      e.stopPropagation();
      toggleInstructionRow(r.id, r.instruction, row);
    };
  });
}

function toggleInstructionRow(recipeId, instruction, rowElement) {
  const tbody = document.getElementById('overview-body');
  if (openInstructionRowId) {
    const oldRow = document.getElementById('instruction-row-' + openInstructionRowId);
    if (oldRow) oldRow.remove();
    if (openInstructionRowId === recipeId) {
      openInstructionRowId = null;
      return;
    }
  }
  const instrRow = document.createElement('tr');
  instrRow.className = 'instruction-row';
  instrRow.id = 'instruction-row-' + recipeId;
  const td = document.createElement('td');
  td.colSpan = 4;
  td.innerHTML = `<b>Anleitung:</b> ${instruction}`;
  instrRow.appendChild(td);
  rowElement.parentNode.insertBefore(instrRow, rowElement.nextSibling);
  openInstructionRowId = recipeId;
}

function filterRecipes() {
  const time = parseInt(document.getElementById('time').value);
  const includeTags = Object.entries(tagFilterState).filter(([tag, state]) => state === 'include').map(([tag]) => tag);
  const excludeTags = Object.entries(tagFilterState).filter(([tag, state]) => state === 'exclude').map(([tag]) => tag);

  const filteredRecipeIds = new Set();
  recipes.forEach(r => {
    const recipeTags = r.tags;
    const matchIncludeTags = includeTags.every(tag => recipeTags.includes(tag));
    const matchExcludeTags = excludeTags.every(tag => !recipeTags.includes(tag));
    const matchTime = isNaN(time) || r.time <= time;
    if (matchIncludeTags && matchExcludeTags && matchTime) {
      filteredRecipeIds.add(r.id);
    }
  });

  renderOverview(filteredRecipeIds);

  // Remove open instruction row if filtered out
  if (openInstructionRowId && !filteredRecipeIds.has(openInstructionRowId)) {
    const oldRow = document.getElementById('instruction-row-' + openInstructionRowId);
    if (oldRow) oldRow.remove();
    openInstructionRowId = null;
  }
}

function setSort(type) {
  currentSort = type;
  filterRecipes();
}

function resetFilters() {
  tagFilterState = {};
  document.getElementById('time').value = '';
  renderTagToggleFilter();
  filterRecipes();
}

window.onload = function() {
  renderTagToggleFilter();
  filterRecipes();
};
