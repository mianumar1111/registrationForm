var Rbtn = document.querySelector('.btn')
var tableContainer = document.querySelector('.tableContainer')
var updateBtn = document.querySelector('.updateBtn')

var rowId = 0
var editRowId = ''

function getSelectedRadio() {
    var selectedRadio = document.querySelector('input[name="choice"]:checked');

    if (selectedRadio) {
        return selectedRadio.value;
    } else {
        return null;
    }
}


var table = document.createElement('table')

Rbtn.addEventListener('click', () => {


    var fName = document.querySelector('#fName').value
    var lName = document.querySelector('#lName').value
    var country = document.querySelector('#country').value
    var email = document.querySelector('#email').value
    var areaCode = document.querySelector('#areaCode').value
    var Phone = document.querySelector('#Phone').value
    var subject = document.querySelector('#subject').value
    var Radio = getSelectedRadio()
    // console.log(Radio)

    if (fName == '' || lName == '' || country == '' || email == '' || areaCode == '' || Phone == '') {
        alert("Please fill out all fields")
    } else if (subject == 'Choose Option') {
        alert('Please Select Subject')
    } else if (Radio == null) {
        alert('Please Select Yes or No from Radio Buttons')

    } else {

        var existingHeader = document.querySelector('.Thead')

        if (!existingHeader) {
            var headerRow = document.createElement('tr')
            headerRow.classList.add('Thead')
            var tableHeaderCell0 = document.createElement('th')
            tableHeaderCell0.textContent = 'Sr.'
            var tableHeaderCell1 = document.createElement('th')
            tableHeaderCell1.textContent = 'Name'
            var tableHeaderCell2 = document.createElement('th')
            tableHeaderCell2.textContent = 'Country'
            var tableHeaderCell3 = document.createElement('th')
            tableHeaderCell3.textContent = 'Email'
            var tableHeaderCell4 = document.createElement('th')
            tableHeaderCell4.textContent = 'Phone'
            var tableHeaderCell5 = document.createElement('th')
            tableHeaderCell5.textContent = 'Subject'
            var tableHeaderCell6 = document.createElement('th')
            tableHeaderCell6.textContent = 'Customer'
            var tableHeaderCell7 = document.createElement('th')
            tableHeaderCell7.textContent = 'Actions'

            headerRow.appendChild(tableHeaderCell0)
            headerRow.appendChild(tableHeaderCell1)
            headerRow.appendChild(tableHeaderCell2)
            headerRow.appendChild(tableHeaderCell3)
            headerRow.appendChild(tableHeaderCell4)
            headerRow.appendChild(tableHeaderCell5)
            headerRow.appendChild(tableHeaderCell6)
            headerRow.appendChild(tableHeaderCell7)
            table.appendChild(headerRow)
        }



        var dataRow = document.createElement('tr')
        dataRow.classList.add('row' + rowId)
        rowId = rowId + 1
        var dataRowCell0 = document.createElement('td')
        dataRowCell0.textContent = rowId
        var dataRowCell1 = document.createElement('td')
        dataRowCell1.textContent = fName + ' ' + lName
        var dataRowCell2 = document.createElement('td')
        dataRowCell2.textContent = country
        var dataRowCell3 = document.createElement('td')
        dataRowCell3.textContent = email
        var dataRowCell4 = document.createElement('td')
        dataRowCell4.textContent = areaCode + ' ' + Phone
        var dataRowCell5 = document.createElement('td')
        dataRowCell5.textContent = subject
        var dataRowCell6 = document.createElement('td')
        dataRowCell6.textContent = Radio

        var dataRowCell7 = document.createElement('td')
        dataRowCell7.classList.add('btnCell')


        var removeRowBtn = document.createElement('button')
        removeRowBtn.textContent = 'Remove'
        removeRowBtn.classList.add('removeBtn')
        dataRowCell7.appendChild(removeRowBtn)

        var editRowBtn = document.createElement('button')
        editRowBtn.textContent = 'Edit'
        editRowBtn.classList.add('editBtn')
        dataRowCell7.appendChild(editRowBtn)

        dataRow.appendChild(dataRowCell0)
        dataRow.appendChild(dataRowCell1)
        dataRow.appendChild(dataRowCell2)
        dataRow.appendChild(dataRowCell3)
        dataRow.appendChild(dataRowCell4)
        dataRow.appendChild(dataRowCell5)
        dataRow.appendChild(dataRowCell6)
        dataRow.appendChild(dataRowCell7)


        table.appendChild(dataRow)

        tableContainer.appendChild(table)

        var fName = document.querySelector('#fName').value = ''
        var lName = document.querySelector('#lName').value = ''
        var country = document.querySelector('#country').value = ''
        var email = document.querySelector('#email').value = ''
        var areaCode = document.querySelector('#areaCode').value = ''
        var Phone = document.querySelector('#Phone').value = ''
        var subject = document.querySelector('#subject').value = 'Choose Option'

        var selectedRadio = document.querySelector('input[name="choice"]:checked')
        if (selectedRadio) {
            selectedRadio.checked = false;
        }

        removeRowBtn.addEventListener('click', function () {
            this.parentNode.parentNode.remove()
        })
        checkValu = 0


        editRowBtn.addEventListener('click', function () {
            var childNodes = this.parentNode.parentNode.childNodes

            // name
            var fullname = childNodes[1].textContent.split(' ')
            var tableFName = fullname[0]
            // console.log(tableFName)
            var tableLName = fullname[1]
            // console.log(tableLName)

            var fName = document.querySelector('#fName').value = tableFName
            var lName = document.querySelector('#lName').value = tableLName

            // country
            var tableCountry = childNodes[2].textContent
            // console.log(tableCountry)
            var country = document.querySelector('#country').value = tableCountry

            var tableEmail = childNodes[3].textContent
            // console.log(tableEmail)
            var email = document.querySelector('#email').value = tableEmail

            var tPhone = childNodes[4].textContent.split(' ')
            var tableAareaCode = tPhone[0]
            // console.log(tableAareaCode)
            var areaCode = document.querySelector('#areaCode').value = tableAareaCode


            var tablePhone = tPhone[1]
            // console.log(tablePhone)
            var Phone = document.querySelector('#Phone').value = tablePhone

            var tableSubject = childNodes[5].textContent
            // console.log(tableSubject)
            var subject = document.querySelector('#subject').value = tableSubject

            var tRadio = childNodes[6].textContent
            if (tRadio == 'No') {
                document.querySelector('input[value="No"]').checked = true;
            } else {
                document.querySelector('input[value="Yes"]').checked = true;

            }
            editRowIdclass = this.parentNode.parentNode.classList
            editRowId = editRowIdclass[0]
            // console.log(editRowId)
            // Rbtn.classList.add('hide')
            // updateBtn.classList.remove('hide')
            
            Rbtn.classList.add('hide')
            updateBtn.classList.remove('hide')

        })
        
    }

}
)




// Update Button Functionality

updateBtn.addEventListener('click', () => {

    var fName = document.querySelector('#fName').value
    var lName = document.querySelector('#lName').value
    var country = document.querySelector('#country').value
    var email = document.querySelector('#email').value
    var areaCode = document.querySelector('#areaCode').value
    var Phone = document.querySelector('#Phone').value
    var subject = document.querySelector('#subject').value
    var Radio = getSelectedRadio()

    if(editRowId == 0){
        alert('Please Add the records First')
    }else if (fName == '' || lName == '' || country == '' || email == '' || areaCode == '' || Phone == '') {
        alert("Please fill out all fields")
    } else if (subject == 'Choose Option') {
        alert('Please Select Subject')
    } else if (Radio == null) {
        alert('Please Select Yes or No from Radio Buttons')

    } else {
        var curruntDataRow = document.querySelector('.'+editRowId)
        console.log(curruntDataRow)
        var curruntDataRowArr = curruntDataRow.childNodes
        curruntDataRowArr[1].textContent = fName + ' ' + lName
        curruntDataRowArr[2].textContent = country
        curruntDataRowArr[3].textContent = email
        curruntDataRowArr[4].textContent = areaCode + ' ' + Phone
        curruntDataRowArr[5].textContent = subject
        curruntDataRowArr[6].textContent = Radio

        var fName = document.querySelector('#fName').value = ''
        var lName = document.querySelector('#lName').value = ''
        var country = document.querySelector('#country').value = ''
        var email = document.querySelector('#email').value = ''
        var areaCode = document.querySelector('#areaCode').value = ''
        var Phone = document.querySelector('#Phone').value = ''
        var subject = document.querySelector('#subject').value = 'Choose Option'

        var selectedRadio = document.querySelector('input[name="choice"]:checked')
        if (selectedRadio) {
            selectedRadio.checked = false;
        }

        // Rbtn.classList.remove('hide')
        // updateBtn.classList.add('hide')


        Rbtn.classList.remove('hide')
        updateBtn.classList.add('hide')
    }
})

