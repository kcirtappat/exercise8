        function myFunction() {
            let input = document.getElementById('num1').value;
            let select1 = document.getElementById('inputType').value;
            let select2 = document.getElementById('resultType').value;
            let value = '';

            if (input === '' || isNaN(input)) {
                document.getElementById('num1').focus;
                document.getElementById('display').innerHTML = "Please enter a number";
            }
            else if (select1 === 'meter' && select2 === 'meter' || select1 === 'kilometer' && select2 === 'kilometer' || select1 === 'centimeter' && select2 === 'centimeter') {
                document.getElementById('num1').focus();
                document.getElementById('display').innerHTML = "Same unit";
            } else if (select1 === 'meter' && select2 === 'centimeter') {
                let metertocent = parseFloat(input) * 100;
                document.getElementById('display').innerHTML = metertocent;
            } else if (select1 === 'centimeter' && select2 === 'meter' || isNaN(input)) {
                let centtometer = parseFloat(input) / 100;
                document.getElementById('display').innerHTML = centtometer;
            } else if (select1 === 'meter' && select2 === 'kilometer') {
                let mettokil = parseFloat(input) / 1000;
                document.getElementById('display').innerHTML = mettokil;
            } else if (select1 === 'kilometer' && select2 === 'meter') {
                let kiltomet = parseFloat(input) * 1000;
                document.getElementById('display').innerHTML = kiltomet;
            } else if (select1 === 'kilometer' && select2 === 'centimeter') {
                let kiltocen = parseFloat(input) * 100000;
                document.getElementById('display').innerHTML = kiltocen;
            } else if (select1 === 'centimeter' && select2 === 'kilometer') {
                let centokil = parseFloat(input) / 100000;
                document.getElementById('display').innerHTML = centokil;
            } else {
                value = "";
            }
        }
