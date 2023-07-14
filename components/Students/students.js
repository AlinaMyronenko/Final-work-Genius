const ROOT_STUDENTS = document.getElementById('card-study');

class Characters {
    hover( fullinfo, name) {
        let id = name;
        let full = '';
            CHARACTERS.forEach(({name, alternateNames, species, gend, house, dateOfBirth, yearOfBirth, wizard, ancentry, eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff, actor, alive,}) => {
                if (id == name) {
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
            <button id="btn" class="characters-button">Більше інформації<img src="/img/svg/arrow.svg" alt="..." /></button>
            <div class="hover" onmouseover="stadents.hover(this, '${name}')" onmouseout="stadents.hoverOut(this, '${name}')"></div>
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
