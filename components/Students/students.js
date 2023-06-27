const ROOT_STUDENTS = document.getElementById('card-study');

class Characters {
    render() {
        let htmlCatalog = '';
        CHARACTERS.forEach(({ name, alternateNames, house, dateOfBirth, img, hogwartsStudent }) => {
            if (hogwartsStudent == true) {
                htmlCatalog += `
            <li class="characters-el">
            <img class="characters-img" src="${img}"/>
            <div class="gradient"></div>
            <span class="characters-name">${name}</span>
            <span class="characters-altname">${alternateNames}</span>
            <span class="characters-house">${house}</span>
            <span class="characters-birth">${dateOfBirth}</span>
            <button class="characters-button">Більше інформації<img src="/img/svg/arrow.svg" alt="..." /></button>
            </li>
            `;
            }
            });

        const html = `
        <ul class="characters-conteiner">
        ${htmlCatalog}
        </ul>
        `;
    

        ROOT_STUDENTS.innerHTML = html;
      
    };

};

const stadents = new Characters();
stadents.render();
