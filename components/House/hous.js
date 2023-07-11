const ROOT_HOUSE = document.getElementById('card-house');


class Characters {
     hover( fullinfo, name) {
        let id = name;
        let full = '';
            CHARACTERS.forEach(({name, alternateNames, species, gend, house, dateOfBirth, yearOfBirth, wizard, ancentry, eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff, actor, alive,}) => {
                if (id === name) {
                 full += `
                <nav class="fullinfo"><div>
                <p>Name: <span> ${name}</span></p>
                <p>Alternate names: <span>${alternateNames}</span></p>
                <p>Species:<span> ${species}</span></p>
                <p>Gend:<span> ${gend}</span></p>
                <p>House: <span>${house}</span></p>
                <p>Date of birth:<span> ${dateOfBirth}</span></p>
                <p>Year of birth:<span> ${yearOfBirth}</span></p>
                <p>Wizard:<span> ${wizard}</span></p>
                <p>Ancentry:<span> ${ancentry}</span></p>
                <p>EyeColour:<span> ${eyeColour}</span></p>
                <p>HairColour:<span> ${hairColour}</span></p>
                <p>Wand:<span> ${wand}</span></p>
                <p>Patronus: <span>${patronus}</span></p>
                <p>Hogwarts student: <span> ${hogwartsStudent}</span></p>
                <p>Hogwarts staff: <span> ${hogwartsStaff}</span></p>
                <p>Actor:<span> ${actor}</span></p>
                <p>Alive:<span> ${alive}</span></p>
                </div></nav>
                
                `;
                };
         fullinfo.innerHTML = full;
               
            });
         
    };

    hoverOut(outinfo, name) {
        let out = '';
        let id = name;
        CHARACTERS.forEach((name) => {
            if (id === name) {
                out.remove();
                out = false;
                
            }
        })
       
       outinfo.innerHTML = out;
    }

    render(house) {
        let htmlCatalog = '';
        let id = house;
        CHARACTERS.forEach(({ name, alternateNames, house, dateOfBirth, img}) => {
            if (id === house) {
                   htmlCatalog += `
            <li class="characters-el">
            <img class="characters-img" src="${img}"/>
            <div class="gradient"></div>
            <span class="characters-name">${name}</span>
            <span class="characters-altname">${alternateNames}</span>
            <span class="characters-house">${house}</span>
            <span class="characters-birth">${dateOfBirth}</span>
            <button id="btn" class="characters-button" onmouseover="house.hover(this, '${name}')" onmouseout="house.hoverOut(this, '${name}')">Більше інформації<img src="/img/svg/arrow.svg" alt="..." /></button>
            </li>
            `;
                
            }
            });

        const html = `
        <ul class="characters-conteiner-house">
        ${htmlCatalog}
        </ul>
        `;
        

        ROOT_HOUSE.innerHTML = html;
      
    };



};

const house = new Characters();
house.render();