const ROOT_STAFF = document.getElementById('card-staff');

class CharactersStaff {
    render() {
        let htmlCatalog = '';
        CHARACTERS.forEach(({ name, alternateNames, house, dateOfBirth, img, hogwartsStaff }) => {
            if (hogwartsStaff == true) {
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
        <ul class="characters-conteiner-staff">
        ${htmlCatalog}
        </ul>
        `;
    

        ROOT_STAFF.innerHTML = html;
      
    };

};

const staff = new CharactersStaff();
staff.render();